/**
 * HoverTest.jsx
 */
 import * as React from 'react';

 // Component(s)
 import HoverTest from './HoverTest';

 export default {
   title: 'HoverTest',
   component: HoverTest,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <HoverTest />;

 Default.storyName = 'default';
