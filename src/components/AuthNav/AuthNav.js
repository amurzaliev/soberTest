import React, {PureComponent} from 'react';
import './AuthNav.css';

export default class AuthNav extends PureComponent {
  render() {
    const {navItems, activeFormId, changeForm} = this.props;
    const navList = navItems.map(({id, label}) => {
      let linkClass = 'btn btn-link nav-link AuthNav__link';
      if (activeFormId === id) {
        linkClass += ' AuthNav__link--active';
      }

      return (
        <li className="nav-item AuthNav__navItem" key={id}>
          <button className={linkClass} onClick={() => changeForm(id)}>{label}</button>
        </li>
      );
    });

    return (
      <ul className="nav AuthNav">
        {navList}
      </ul>
    );
  };
}