import React, { useState } from "react";
import styled from "styled-components";
import { signout } from "../Icons/Icons";
import { menuItems } from "../MenuItems/MenuItems";

import man from "../assets/man.png";

function Navigation(props) {
  return (
    <NavStyled>
      <div className="user">
        <img className="user-image" src={man} alt="user-image" />
        <div className="user-text">
          <h2>Chinmay</h2>
          <p>Your money</p>
        </div>
      </div>

      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              style={{ marginBottom: "3rem" }}
              onClick={() => props.setActive(item.id)}
              className={props.active === item.id ? "clicked" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>

      <div className="bottom-nav">
        <li>{signout} signout</li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem;
  cursor: pointer;

  width: 300px;
  height: 100%;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  img {
    height: 80px;
    width: 80px;
    border-radius: 49%;
    object-fit: cover;
    background: #136595;
  }
  h2 {
    color: var(--primary-color);
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    justify-content: start;
    opacity: 0.8;
    color: var(--primary-color);
  }

  li.clicked {
    color: var(--primary-color);
    opacity: 1;
  }
`;
export default Navigation;
