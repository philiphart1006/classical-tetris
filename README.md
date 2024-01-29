<!-- Copy and paste the converted output. -->

<!-----

You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see inline alerts.
* ERRORs: 0
* WARNINGs: 0
* ALERTS: 30

Conversion time: 8.802 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β35
* Mon Jan 29 2024 06:00:17 GMT-0800 (PST)
* Source doc: SEI ReadMe: Project 1 (Tetris)
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 30.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>
<a href="#gdcalert4">alert4</a>
<a href="#gdcalert5">alert5</a>
<a href="#gdcalert6">alert6</a>
<a href="#gdcalert7">alert7</a>
<a href="#gdcalert8">alert8</a>
<a href="#gdcalert9">alert9</a>
<a href="#gdcalert10">alert10</a>
<a href="#gdcalert11">alert11</a>
<a href="#gdcalert12">alert12</a>
<a href="#gdcalert13">alert13</a>
<a href="#gdcalert14">alert14</a>
<a href="#gdcalert15">alert15</a>
<a href="#gdcalert16">alert16</a>
<a href="#gdcalert17">alert17</a>
<a href="#gdcalert18">alert18</a>
<a href="#gdcalert19">alert19</a>
<a href="#gdcalert20">alert20</a>
<a href="#gdcalert21">alert21</a>
<a href="#gdcalert22">alert22</a>
<a href="#gdcalert23">alert23</a>
<a href="#gdcalert24">alert24</a>
<a href="#gdcalert25">alert25</a>
<a href="#gdcalert26">alert26</a>
<a href="#gdcalert27">alert27</a>
<a href="#gdcalert28">alert28</a>
<a href="#gdcalert29">alert29</a>
<a href="#gdcalert30">alert30</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>


**ReadMe - Project 1 (Classical Tetris)**

![alt_text](images/image12.png "image_tooltip")
** **

<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


Contents


[TOC]



## Description

This project was undertaken in week 4 of the course at the end of the introduction to the front-end module. It was written in HTML, CSS, and Vanilla JavaScript.


## [Deployment link](https://philiphart1006.github.io/classical-tetris/)

The project is hosted on GitHub Pages.


## Getting Started/Code Installation

[GitHub Repo](https://github.com/philiphart1006/classical-tetris) >> Right-click `index.html` >> Open in default browser


## Timeframe & Working Team

This project was undertaken as a solo effort over the course of 7 days: Friday - Thursday.

**Day 1**



* Planning
* Coding started

**Day 5**



* MVP achieved, enhancements & bug fixing started

**Day 6**



* Deployed and player feedback/reported bugs tracking started


## Technologies Used


### HTML



* Body split up semantically including main (with default welcome sections & sidebar (with subsections))
* Buttons
    * Reactive content that switches based on width of screen
* Audio for background music & line completion sound effect
* Imported fonts from Google Fonts
* Favicons


### CSS



* CSS classes for active/held/stored tetrimino pieces
* Grids using both flex-box and CSS grid
* CSS root variables for a themed colour palette
* Standard font sizing declared at start
* Media queries for:
    * Widescreen mode (introduces a further background image to body in classical mode)
    * Narrow/phone mode
        * Re-arranged main & sidebar as flex-columns
        * Removes some elements of sidebar to allow presentation within constricted space


### JavaScript



* Elements:
    * DOM elements
* Global variables
* keyUp & keyDown events to move the tetrimino and trigger manual functions
* Click events as alternatives for every keyUp/keyDown event to allow touch screen / keyboardless compatibility
* setInterval to move the tetrimino automatically
* Changing HTML head elements (CSS stylesheet; audio source; favicon/image sources)


## Brief

**[Full brief in appendix](#appendix-1-general-assembly-provided-project-briefs-full)** - extracts below:

 
### Technical Requirements

The app must:



* Render a game in the browser
* Be built on a grid: do not use HTML Canvas for this
* Design logic for winning & visually display which player won
* Include separate HTML / CSS / JavaScript files
* Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
* Use Javascript for DOM manipulation
* Deploy your game online, where the rest of the world can access it (we will do this together at the end of the project)
* Use semantic markup for HTML and CSS (adhere to best practices)


### Necessary Deliverables



* A working game, built by you, hosted somewhere on the internet
* A link to your hosted working game in the URL section of your Github repo
* A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
* A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc. (completed post project)


### Game Outline

Tetris is a puzzle game where the player has to fit different shaped blocks (called Tetriminos) together so that they make a complete line across the playing board. Once a line is achieved it is removed from the game board and the player's score is increased.

The player can move the Tetriminos left and right and rotate them clockwise in 90º increments.

The aim of the game is to get as many points as possible before the game board is filled with Tetriminos.


### Requirements



* The game should stop if a Tetrimino fills the highest row of the game board
* The player should be able to rotate each Tetrimino about its own axis
* If a line is completed it should be removed and the pieces above should take its place


## Planning


### Research


### [Project management](https://trello.com/b/4BtgsPFU/classical-tetris)

Adopting a “Game Development” template Trello board, I split the game functionality and coding into separate _milestones _each of which contained numerous _objectives _as cards. I also included columns for bugs & enhancements. This helped me pseudocode & split out functionality into different functions.



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")


<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")



#### MVP: Milestones & Objectives



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")



#### Enhancements

Splitting the project into an MVP and further enhancement allowed me to prevent scope creep into the initial deliverable.


#### Bug tracking

Having a place for bug tracking from the beginning was helpful in recording what bugs had been detected, were being worked on, and had been fixed.


### Design


#### [Wireframe](https://www.figma.com/file/1JlAZEaPBxmBBIlAeDSw9x/Individual-Projects?type=design&node-id=0%3A1&mode=design&t=i4wOqWgRwIsnIovJ-1)

I utilised Figma here to draw out the wireframe with all HTML elements

When making mobile responsive, I ideally should have created a separate wireframe for the mobile page. However, the incorporation of two main sections - main & sidebar - allowed a relatively easy transition.



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")



#### Resources

I utilised various licence-free sites for resources such as audio files, images, logos


### Pseudocode

In addition to laying out initial Elements, Variables, & Events, I wrote out how I expected each initial function to be achieved in my JS code



<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image7.png "image_tooltip")



## Build/Code Process


#### Day 1



* Milestone: pre-start game setup
    * HTML coding
    * CSS styling (basic)
    * JavaScript: generate main grid



<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image8.png "image_tooltip")



#### Days 2 - 3 (weekend)



* Milestone: start game/piece automations
* Milestone: player interaction (translation)
* Milestone: Complete line [buggy]
* Milestone: Game over

While I was coding individual functions, I created test keyDown functions so I didn’t have to play the game through to test each function. I would also console.log() out each time a different function was being executed.



* I had a different test keyUp function to create each of the 7 tetriminoes rather than rely on their random creation.
* Once the setInterval function was running correctly, I kept this off for the majority of the build to allow testing player interactions at my own pace.



<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image9.png "image_tooltip")


Central to the game’s functionality is the move down function. Each time a piece moves down (either automatically or through user interaction), in addition to moving the tetrimino itself, a number of checks must then be carried out:



* Is the tetrimino at the bottom/on top of a landed piece?
    * If so, land the tetrimino
        * Is there a complete line?
        * Is the tetrimino still touching the top of the grid?
    * Activate the next tetrimino



<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image10.png "image_tooltip")



#### Day 4



* Bug fix: Complete line
* Milestone: Sidebar right preview
* Milestone started: player interaction (basic rotation)

This was the slowest day in terms of functionality/progress as I was stuck on the completeLine function (_see: Challenges_). However, it provided me with my biggest win as well (_[see: Wins - Rotations](#wins)_)


#### Day 5 (MVP achieved, Enhancements)



* Milestone: player interaction (basic rotation)
* **MVP achieved**
* Enhancements:
    * player interaction (rotate anti-clockwise)
    * Levels
    * Game music
    * Hard land piece
    * Pause/unpause
    * Store high-score locally
    * Mute/ unmute
    * Clickable button alternatives
    * Store grid
* **Bug fixes**

This was the best day in terms of progress/reward and achieved functionality. Once I had achieved the minimum viable product, I focused on the simplest initial enhancements that allowed me to code these a lot faster than the initial milestones.

I could also start playing the game through (and enjoying it!) which allowed me to QA and start debugging.


#### Day 6 (Deployment, Enhancements & Bug Fixes)



* **Deployment**
* Enhancements
    * Store/ retrieve piece
    * Mobile responsive design
* Enhancement Milestone: two themes
    * Alternative music, logos, & favicons
    * Alternative CSS stylesheets
* Code refactoring
* Bug fixes

My first ever deployment was very rewarding and allowed me to share with some of my network for some further QA’ing.

This day also featured another two wins: making the game responsive and allowing it to have two themes - classical themed Tetris was born!



<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image11.png "image_tooltip")


I reviewed my JavaScript and refactored which included:



* Removing excessive console logging that was crowding the console when playing the game and testing new features/fixes
* Utilising the Better Comments VS Code extension to allow easy visual distinction between sections, groups of functions/variables etc for myself and anyone else who may be working with the code in the future
* Combining repeated code parts into one function that could be accessed from multiple other functions/with different parameters.
* One of the slickest examples of this is the ability to switch between themes either on starting the game or mid-game with the ✨_timeTravel function✨_



<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image12.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image12.png "image_tooltip")


_[Classical Tetris - 9 November 2023 - Watch Video](https://www.loom.com/share/2faa02ae0c6f4f9789244c8b57d407f9)_



<p id="gdcalert13" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image13.gif). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert14">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image13.gif "image_tooltip")



#### Day 7 (Enhancements & Bug Fixes)



* Enhancements:
    * Implemented default colour palette via root variables in classical.css file



<p id="gdcalert14" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image14.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert15">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image14.png "image_tooltip")




    * [Player bug reporting form](https://forms.gle/TPocdkbM5Ex8WqG3A)
        * Implanted a link to a Google form where players can report bugs; I then built automation in Zapier that would add a new card with these details to the player-reported bugs Trello list.



<p id="gdcalert15" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image15.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert16">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image15.png "image_tooltip")


<p id="gdcalert16" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image16.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert17">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image16.png "image_tooltip")


<p id="gdcalert17" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image17.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert18">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image17.png "image_tooltip")




* **Bug fixes**
* **Player reported bug fixes**


## Challenges


#### Complete line function

When an entire line/row is completed, this row must disappear, the tetrimino pieces above must move down one, and a new empty line be created at the top.

Cells in my Tetris grid existed as div child elements of the dropGrid section. They were then identified in the DOM and created as a dropCells[] node list/array.

This was my first foray into rubber duck debugging. Following a morning of no breakthrough, I had to call on the assistance of the course teachers to help me console log each step together to garner where the error was.

With my original function, while the row would disappear from the HTML when inspected with Chrome’s developer tools, logging the dropCells[] would

I had not fully understood the remove() method and how it affected both the HTML element and the JavaScript array. While it would remove the div elements from the HTML, the JavaScript array would need updating/refreshing.

Updating the dropCells[] array by re-running the document.querySelectorAll() method kept the HTML and JavaScript in sync and resolved the issue.


#### JS Classes vs. CSS Classes

The pieces are both identified & styled by appending CSS class names with the div.ClassList.add/remove() method.

The typeX classes were used to style the pieces with the according colour in CSS.

I utilised querySelectorAll(‘.className.’) a lot when selecting active/held/stored tetrimino pieces.

In an ideal world, I would have used JavaScript classes for tagging/identifying the divs where styling wasn’t required (.active .hold .store .piece) and had constructor classes within my JavaScript.


## Wins


#### Rotate function



For the rotation function, I had initially planned to rotate pieces through 4 different configurations, with each piece/configuration needing a different function (up to 28!).

Theoretically, when a tetrimino was to be rotated, I would need to iterate over each piece and determine where in the tetrimino it was and what configuration the tetrimino was in.



<p id="gdcalert18" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image18.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert19">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image18.png "image_tooltip")


Rather than requiring different functions, I was able to create “rotation arrays”. When a piece is created, one central piece would be assigned as the tetrimino’s axis. When a tetrimino is rotated, the pieces would just revolve around this central axis. The translation required was independent of what shape the overall tetrimino was.



<p id="gdcalert19" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image19.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert20">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image19.png "image_tooltip")




* Top left: the difference between the index of the current cell and the axis cell in the centre
* Middle left: the number to be added to the cell’s index to move it clockwise 90°
    * Middle right: with a standard width set to 10, what this would produce when console logged
* Bottom left: where each value would sit in the created arrays
* Bottom right: the number to be added to the cell’s index to move it counter-clockwise

The resulting arrays in my code; this allowed me to use the same rotate function for both rotation directions. Ideally, this could have perhaps been an object rather than 3 arrays of equal length.



<p id="gdcalert20" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image20.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert21">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image20.png "image_tooltip")



#### Multiple themes enhancement

To play on the pun of Classic vs Classical, players would need the option to play Tetris with two themes: retro & Roman. Players could decide this on starting the game or toggle throughout gameplay at the touch of a button/key.

In order to achieve this, I had a JavaScript timeTravel function that:



* Toggleed the mode variable between classic & classical
* Switched the linked CSS stylesheet in the main HTML
* Changed the audio source for the background music in the main HTML
* Change the logo & favicon sources in the main HTML



<p id="gdcalert21" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image21.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert22">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image21.png "image_tooltip")



#### Responsive design enhancement

I wanted the ability to play the game on my phone.

In order to achieve this, I had to:



* Make the layout responsive based on screen size. 
    * Rather than opting for a default phone size for the media query, I switched at the point at which my original design started to become too cramped
    * The main body went from being a flex-box row to column orientation.
    * I hid some elements from the sidebar while allowing core functionality
* Made buttons with event listeners for every single keyUp/keyDown triggered function
    * I had to use spans within the buttons so that the button text went from displaying which key to press, to which function the button would trigger

While the game looks OK on a Pixel 6 and iPhone 15 Pro (both were available at home when coding), other players have reported it not displaying properly on different models.



<p id="gdcalert22" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image22.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert23">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image22.png "image_tooltip")




<p id="gdcalert23" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image23.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert24">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image23.png "image_tooltip")


<p id="gdcalert24" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image24.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert25">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image24.png "image_tooltip")



## Key Learnings/Takeaways


#### Project management

I utilised previous experience in building click-to-code products such as a Salesforce-based ChatBot for B2B & B2C customer support in a previous company in laying out my project plan.

However, the use of different terminology and being extra strict about keeping the plan up to date, allowed me to work efficiently on one focus area at a time to deliver features that work effectively/smoothly.



<p id="gdcalert25" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image25.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert26">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image25.png "image_tooltip")



#### setInterval

Core to the game’s automation, was moving a piece down at a set interval. While the original setInterval function (snippet below) was fairly basic, in order to drop pieces quickly, increase difficulty, and pause/unpause the game, I had to be able to clear this, re-set, and change the timeInterval duration.



<p id="gdcalert26" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image26.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert27">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image26.png "image_tooltip")


When the level was increased, this would change the timeInterval, making it 5% faster each time. I achieved this by setting the timeInterval variable to 1000ms * 0.95^(level - 1).



<p id="gdcalert27" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image27.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert28">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image27.png "image_tooltip")


When a piece was hard-dropped, it would decrease the timeInterval down to 1ms. This would need to be reset when the tetrimino landed at the bottom to prevent a sudden column of tetriminoes and instant game over!



<p id="gdcalert28" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image28.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert29">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image28.png "image_tooltip")


When the game was over, this would need to be stopped to prevent the continuous build up of the score - especially if the final action was a hard drop and the counter was running at 1 point per millisecond.


## Bugs


#### Resolved bugs



<p id="gdcalert29" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image29.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert30">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image29.png "image_tooltip")


<p id="gdcalert30" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image30.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert31">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image30.png "image_tooltip")


Unresolved bugs

_Watch this space! Player reported bugs will appear via [this form](https://forms.gle/x6U3h3BfENxqpToQ8) _


## Future Improvements


#### Remaining desired enhancements

In addition to creative improvements (alas, I am no graphic/UX designer!), there were few enhancements I didn’t get around to doing within sample basic games that I had played:

Some remaining:



* Lives - players can have multiple lives and instead of immediately ending the game when the top row is reached, 10 random lines could be removed and a life lost until the player has 0 lives.
* Difficulty selection - players can select a difficulty and this would vary either the initial setInterval length for how quickly a tetrimino drops _or _how quickly it speeds up each level up.
* Ghost piece - players can see where the tetrimino will land in the form of an outline just above the landed tetriminos


#### Player requested functionality

In addition to my form that collects player reported bugs, I could add in functionality that allows players to suggest enhancements they would like to see. 

One player already suggested a named high score board. Within this front-end module, we had only covered local storage. Connecting to a centrally stored high score database would be great for adding that competitive element to the game!


## Appendix 1: General Assembly provided project briefs (full)

**_## Overview_**

_Let's start out with something fun - ****a game!****_

_Everyone will get a chance to ****be creative****, and work through some really ****tough programming challenges**** – since you've already gotten your feet wet with Javascript, it's up to you to come up with a fun and interesting game to build._

**_**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!_**

_---_

**_## Technical Requirements_**

_Your app must:_

_* ****Render a game in the browser****_

_* ****Be built on a grid: do not use HTML Canvas for this****_

_* ****Design logic for winning**** & ****visually display which player won****_

_* ****Include separate HTML / CSS / JavaScript files****_

_* Stick with ****KISS (Keep It Simple Stupid)**** and ****DRY (Don't Repeat Yourself)**** principles_

_* Use ****Javascript**** for ****DOM manipulation****_

_* ****Deploy your game online****, where the rest of the world can access it (we will do this together at the end of the project)_

_* Use ****semantic markup**** for HTML and CSS (adhere to best practices)_

_---_

**_## Necessary Deliverables_**

_* A ****working game, built by you****, hosted somewhere on the internet_

_* A ****link to your hosted working game**** in the URL section of your Github repo_

_* A ****git repository hosted on Github****, with a link to your hosted game, and frequent commits dating back to the very beginning of the project_

_* ****A ``readme.md`` file**** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc. (completed post project)_

**# Tetris**

![tetris](<span style="text-decoration:underline;">https://media.git.generalassemb.ly/player/15120/files/daf26380-fec9-11e8-8acf-fa36d83d819c</span>)

Tetris is a puzzle game where the player has to fit different shaped blocks (called Tetriminos) together so that they make a complete line across the playing board. Once a line is achieved it is removed from the game board and the player's score is increased.

The player can move the Tetriminos left and right and rotate them clockwise in 90º increments.

The aim of the game is to get as many points as possible before the game board is filled with Tetriminos.

**## Resources**

* [Tetris - NES Gameplay - Youtube](<span style="text-decoration:underline;">https://www.youtube.com/watch?v=CvUK-YWYcaE</span>)

* [Tetris - Wikipedia](<span style="text-decoration:underline;">https://en.wikipedia.org/wiki/Tetris</span>)

**## Requirements**

* The game should stop if a Tetrimino fills the highest row of the game board

* The player should be able to rotate each Tetrimino about its own axis

* If a line is completed it should be removed and the pieces above should take its place

**## Suggested enhancements**

* Responsive design

* Speed increases over time

* Persistent leaderboard using `localStorage`

**## Challenges**

By far the larges challenge here is the rotation of the Tetriminos. Each one rotates around a specific point on its axis. Also some Tetriminos, particularly the long bar, create problems issues when turning next to the walls of the game board. Furthermore, once a line has been made, the blocks above have to all shift down a row to fill the space, which requires a good amount of recursion.

**## Tips**

* Make sure you spend plenty of time planning __before__ you start coding

* Make sure you understand all of the rules of the game

* Make a checklist of all the features you want to add to the game

* Keep It Stupid Simple

* Refactor your code as you go

* Make sure you have a good idea of what your MVP is and only add extra features once you have achieved it

* Do just enough styling to get started, then once you have your MVP polish up the styling before moving on
