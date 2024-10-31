---
layout: post
title: Student Home
description: Home Page
hide: true
---


{%- include submenu.html -%}


I'm Avantika Chittari!!
## Welcome to My Site


Here’s some content before the submenu.


<!-- Begin submenu -->
<div class="submenu">
   <td><img src="{{site.baseurl}}/images/logo.png" height="60" title="Submenu Navigation with direct code" alt=""></td>
       <td><a href="{{site.baseurl}}/nav/intro/intro">Intro</a></td>
       <td><a href="{{site.baseurl}}/nav/design/design">Design</a></td>
       <td><a href="{{site.baseurl}}/nav/ideas">Ideas</a></td>
       <td><a href="{{site.baseurl}}/nav/snake">Snake Game</a></td>
</div>
<!-- End submenu -->




<div>
    <h3>Welcome to My Portfolio</h3>
    <p>This is a brief introduction to my work.</p>
</div>


<div id="mystyle">
    <h4>My Projects</h4>
    <p>Check out my latest projects:</p>
    <ul>
        <li><a href="https://www.example.com/project1">Turtle game</a></li>
        <li><a href="https://www.example.com/project2">Snake game</a></li>
        <li><a href="https://www.example.com/project3">RPG game0.1</a></li>
    </ul>
</div>


<div>
    <h4>About Me</h4>
    <p>I am interested in Compsci.</p>

</div>
<h4>About Me</h4>
<p>Game Ideas:</p>
<ul>
    <li>Sound effects for character actions such as jumping, acquiring points, and defeating enemies.</li>
    <li>Collectibles like treasures and coins that encourage exploration.</li>
    <li>Different levels that unlock new areas and sprites.</li>
    <li>Interactive NPCs offering quests that reward XP and weapons.</li>
    <li>Character actions that respond to keyboard input.</li>
    <li>XP gain through defeating giants, with level-ups enhancing health and attack power.</li>
    <li>Traps and pits that reset the game on failure.</li>
    <li>A dynamic day/night cycle affecting gameplay.</li>
    <li>New weapons as the character levels up, with varied effects.</li>
    <li>Energy consumption mechanics for actions like walking and jumping.</li>
    <li>Maze quests for added challenges.</li>
    <li>Multiplayer capabilities for teamwork in defeating giants.</li>
</ul>


<div id="mystyle">
    <button onclick="alert('Thank you for pressing this button!')">Subscribe</button>
</div>



<style>
    
    #mystyle a {
        padding: 15px 40px;
        background-color: #fff; /* White button */
        color: #001f3f; /* Navy text */
        text-decoration: none;
        border-radius: 30px;
        font-size: 1.2em;
        font-weight: bold;
        transition: background-color 0.3s ease, transform 0.3s ease;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        display: inline-block;
    }
    #mystyle a:hover {
        background-color: #f4f4f9; /* Light gray on hover */
        transform: scale(1.05);
    }
</style>

