/**
 * @file HoverTest.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './HoverTest.module.css';
let image = document.querySelector('.img-inner img');
let text = document.querySelector('.hover-text');
// let image2 = document.querySelector(".img-inner2 img");
// let text2 = document.querySelector(".hover-text2");

document.addEventListener('mousemove', function (e) {
  let x = e.clientX;
  let y = e.clientY;

  let size = getComputedStyle(document.body).getPropertyValue('--size');

  size = parseFloat(size);

  image.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  text.style.clipPath = `circle(${--size / 2}px at ${x}px ${y}px)`;
});
const HoverTest = ({
  tagName: Tag = 'div',
  className = '',
  variant = 'default',
  children = '',
}) => {
  return (
    <Tag
      className={`${styles.hover_test} ${
        styles[`hover_test__${variant}`]
      } ${className}`}
    >
      <a className="flex font-pp font-black flex-col items-center justify-center mx-auto my-12 text-[30px] hover:text-accent0">
        FOMO FOMO FOMO
      </a>
      <a className="flex flex-col font-black font-pp items-center justify-center mx-auto my-12 text-[30px] hover:text-accent0">
        FOMO FOMO FOMO
      </a>
      <a className="flex flex-col font-black font-pp items-center justify-center mx-auto my-12 text-[30px] hover:text-accent0">
        FOMO FOMO FOMO
      </a>
    </Tag>
  );
};

HoverTest.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default HoverTest;
