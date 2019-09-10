<?php

// MySQL DB config:
$config = [
    'host'     => '127.0.0.1',
    'dbname'   => 'test_db',
    'user'     => 'root',
    'password' => '',
    'port'     => '3306'
];

$username = getInput();

try {
    $plainPassword = getRandomString(8);
} catch (Exception $e) {
    echo "Ошибка: " . $e->getMessage() . PHP_EOL;
}

$password = password_hash($plainPassword, PASSWORD_BCRYPT);

try {
    $conn = new PDO(
        "mysql:host=${config['host']};dbname=${config['dbname']};port=${config['port']}",
        $config['user'],
        $config['password']
    );
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username LIMIT 1");
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch();

    if (!empty($user)) {
        echo "Такой пользователь уже существует.\n";
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
    $stmt->execute(['username' => $username, 'password' => $password]);

    echo "'${username}' пользователь создан с паролем: ${plainPassword}\n";
} catch (PDOException $e) {
    echo "Ошибка: " . $e->getMessage() . PHP_EOL;
}

function getInput()
{
    $shortOpts = "u:";
    $longOpts = ["username:"];

    $options = getopt($shortOpts, $longOpts);

    if (!isset($options['u']) && !isset($options['username'])) {
        echo "Необходимо ввести имя пользователя \"-u=<username>\"\n";
        exit;
    }

    return $options['u'] ?? $options['username'];
}

function getRandomString(
    $length,
    $keySpace = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
)
{
    $str = '';
    $max = mb_strlen($keySpace) - 1;
    if ($max < 1) {
        throw new Exception('$keySpace должен быть от 2 и более символов');
    }
    for ($i = 0; $i < $length; ++$i) {
        $str .= $keySpace[random_int(0, $max)];
    }
    return $str;
}
