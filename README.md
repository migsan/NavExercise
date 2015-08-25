# Huge Navigation Exercise

## Miguel Santamaría Solution

### Running the exercise

#### Requirements

To execute and test the exercise you will need nodejs and npm

**Disclaimer:** *This excersice is pointed to render and work on Google Chrome only, other browsers may experience inconsistent visualisations of the same.*

#### Walkthrough

To execute and test the exercise:

* Extract the zip file
* Move to the main directiory of the file:
```
cd NavExercise
```
* Run the command:
```
npm install && npm start
```
* In Google Chrome navigate to [http://localhost:3000](http://localhost:3000)

### Scripts

The code presented is a modular aplication with a main file that executes the methods exposed by the two modules.

* ```module.js```: the first module is a revealing module exposing the ajax callback function as well as some behaviour events handlers for the menu and its interactions.
* ```broadcast.js```: is the second module and the one in charge of the communication, exposing the functions to publish an event and to listen to a certain event.
* ```main.js```: the last element is the main file  which invokes the functions and listen to the ajax callback in order to attach and generate the behaviours needed in the exercise.

### Styles

#### Overview

The styles are generated using css preprocessor less. The styles files are five with one import file to host the others. In importing order they are:

* ```variables.less```: hosting the variables information for sizes and colors.
* ```fonts.less```: with the font-face properties for the typography used in the exercise.
* ```clear.less```: containing few information for clearing default styles in the browser.
* ```mixins.less```: with predefined style blocks for typography.
* ```main.less```: specifying the styles for the NavExercise and using the mixins as well as the variables specified.

#### Elements used

The styles are directed to render the NavExercise correctly in Google Chrome as specified in the documentation.
Transitions and mediaqueries are used to ensure the acceptance criteria mentioned. 
There are 4 breakpoints, three for desktop and one for mobile. The two additional breakpoints on desktop are used to display the page when closing the width of the browser when using the default meaurements will lead to a broke menu bar.

### Markup

The markup is a HTML5 file with the skeleton for the app. As the menu is generated dynamically it only define the hierarchy of the document divided in two main section: the navigation and the main content.

The keyboard navigation is ensured by using tab to navigate through the elements, enter to interact with them and escape key to close the navigation.

Minimum SEO is present in the page with the use of the propper heading elements and semantic tags within the document.

## Overview

This exercise will have the candidate build a responsive site navigation driven by an AJAX request.

Here are the guidelines for this exercise

* No frameworks or libraries (e.g. jQuery, Angular, React).
* Chrome compliance is all that's required, all functions and features available in Chrome are in play.
* Nav must be responsive.
* Code must run after the following command, please ensure your code runs as you expect it to from a fresh checkout with these commands before submission.

## Task runner

The project uses grunt.js to do three main tasks:

* Less: compiles the less file into main.css which is used by the exercise.
* JShint: to help lint javascript error during the development.
* Watch: to look for changes over save of the files and recompile the project.

```
$ npm i && npm start
```

Nice to haves:

* Adherence to accessibility standards
* Documentation
* Unit and/or E2E tests

At a high level the navigation will have two main states

* <768px: Mobile. Hamburger icon will display in the top-left of the page. Clicking the hamburger will cause a card to slide in and overlay the content from the left. The card will contain nav and sub-nav items defined in the JSONP response
* \>= 768px: Desktop. The nav will display as a horizontal nav. Top level nav items will display sub-nav items when clicked. No hamburger will be shown.

## Version
0.1.0

## Files

* Mockup - Illustrator file describing how the nav should behave
* server.js - node.js server that will host the site and provie the api to construct the nav

## API

* GET /api/nav.json - returns a JSON response representing the items in the nav.

## Get Started

###Requirements
* <a href="http://www.adobe.com/products/illustrator.html">Adobe Illustrator</a>
* Node.js and npm (You get both when you <a href="https://docs.npmjs.com/getting-started/installing-node">install Node.js</a>.)

###Install the exercise locally
```
git clone git@github.com:hugeinc/NavExercise.git
cd NavExercise
npm install
npm start
```

## Design Specifications

### Typography

* **Primary Navigation** 21/48 HUGE Avant Garde Bold
* **Secondary Navigation** 16/48 Galaxie Copernicus Book
* **Headline (Desktop)** 120/132 HUGE Avant Garde Bold
* **Body Copy (Desktop)** 24/36 Galaxie Copernicus Book
* **Headline (Mobile)** 44/48 HUGE Avant Garde Bold
* **Body Copy (Mobile)** 14/24 Galaxie Copernicus Book
* **Copyright (Mobile)** 12/16 Helvetica Neue Regular

### Color

* **Magenta** #ec008c
* **Light Gray** #eee
* **Translucent Black** rgba(0, 0, 0, 0.5)

### Measurements

Measurements are specified in pixels. Dimensions are fluid unless specified.

### Interactions

#### Desktop

* On hover, Primary Navigation reverses color (white/magenta).
* On click, if item contains a URL, Primary Navigation navigates to a new page.
* On click, if item contains other items, Secondary Navigation appears (see Desktop, Secondary Navigation).
* Menu appears containing Secondary Navigation.
* Translucent mask appears over content, behind menu.
* On hover in, Secondary Navigation changes color (magenta/light gray).
* On click, Secondary navigates to a new page.
* On click outside of menu, menu and mask are hidden.

#### Mobile

* When a user clicks the open navigation icon (“hamburger”), the navigation should “push” from left to right.
* The HUGE logo and navigation toggle slide left to right.
* The open navigation icon should change to the close navigation icon (“x”).
* Translucent mask appears over content, right of navigation.
* The Primary Navigation should include link items and menu items.
* When a user hovers a Primary Navigation item, it should change color (magenta/light gray).
* When a user clicks a Primary Navigation link item, the browser should navigate to a new page.
* When a user clicks a Primary Navigation menu item, the Secondary Navigation should “push” down, the chevron should rotate * 180°.
* When a user hovers a Secondary Navigation item, it should change color (magenta/light gray).
* When a user clicks a Secondary Navigation item, browser should navigate to a new page.
* When a user clicks outside of the navigation, the navigation should close.
* When the navigation closes:
  * the menu should “pull” from right to left
  * the logo and toggle button should “slide” from right to left
  * the close icon should change to the open icon
  * the mask should be hidden
