---
layout: post
title: Student Home
description: Home Page
hide: true
---

{%- include submenu.html -%}

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Avantika Chittari | Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            background-color: #f8f9fa;
            color: #333;
        }
        .submenu {
            display: flex;
            align-items: center;
            background-color: #001f3f;
            padding: 10px;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        .submenu img {
            height: 50px;
            margin-right: 15px;
        }
        .submenu a {
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            font-weight: bold;
            transition: 0.3s;
        }
        .submenu a:hover {
            background-color: #0074D9;
            border-radius: 5px;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
        }
        h3, h4 {
            color: #001f3f;
        }
        .buttons-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        }
        .buttons-container a {
            padding: 10px 20px;
            background-color: #ADD8E6; /* Baby Blue */
            color: #001f3f;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        .buttons-container a:hover {
            background-color: #87CEEB;
        }
    </style>
</head>
<body>

    
    <div class="submenu">
        <img src="{{site.baseurl}}/images/logo.png" title="Submenu Navigation" alt="Logo">
        <a href="{{site.baseurl}}/nav/intro/intro">Intro</a>
        <a href="{{site.baseurl}}/nav/design/design">Design</a>
        <a href="{{site.baseurl}}/nav/ideas">Ideas</a>
        <a href="{{site.baseurl}}/nav/snake">Snake Game</a>
    </div>
    
    <div class="container">
        <h4>My Projects</h4>
        <p>Explore my latest coding projects:</p>
        <div class="buttons-container">
            <a href="https://avantikachittari.github.io/Avantika_2025_2/snake/">Snake Game</a>
            <a href="https://avantikachittari.github.io/Avantika_2025_2/rpg/">RPG</a>
            <a href="https://avantikachittari.github.io/Avantika_2025_2/rpgv1/">RPGv1</a>
            <a href="https://avantikachittari.github.io/Avantika_2025_2/rpgv2/">RPGv2 Modified</a>
            <a href="https://avantikachittari.github.io/Avantika_2025_2/rpgv3/">RPGv3</a>
        </div>
    </div>
    
    <div class="container">
        <h4>My Homework</h4>
        <p>Check out my completed assignments:</p>
        <div class="buttons-container">
            <a href="https://github.com/avantikachittari/Avantika_2025_2/tree/main/_notebooks/Sprint2/Data_Abstractions">Data Abstraction</a>
            <a href="https://github.com/avantikachittari/Avantika_2025_2/tree/main/_notebooks/Sprint2/Conditions">Conditionals</a>
            <a href="https://github.com/avantikachittari/Avantika_2025_2/tree/main/_notebooks/Sprint2/Classes_and_Methods">Classes & Methods</a>
            <a href="https://github.com/avantikachittari/Avantika_2025_2/blob/main/_layouts/Variables/2024-10-28-variables_hw.ipynb">Variables</a>
            <a href="https://github.com/avantikachittari/Avantika_2025_2/tree/main/_layouts/Mathematic_Expressions">Mathematical Expressions</a>
        </div>
    </div>


  <div class="container">
        <h4>PBL blogs</h4>
        <p>Check out my completed assignments:</p>
        <div class="buttons-container">
            <a href="{{site.baseurl}}/PBL/2025-03-01-Input-And-Output.ipynb/">Input/Output</a>
            <a href="{{site.baseurl}}/PBL/2025-03-01-Classes.ipynb/">Classes</a>
            <a href="{{site.baseurl}}/PBL/2025-02-28-Software-Development-Lifecycle.ipynb/mak">Software development cycle</a>
        </div>
    </div>
      <div class="container">
        <h4>Student Lesson blog</h4>
        <p>Check out my completed assignments:</p>
        <div class="buttons-container">
            <a href="{{site.baseurl}}/JavaScriptBasics/2025-2-28-Control-Structures.ipynb/">Control Structures</a>
            <a href="{{site.baseurl}}/PBL/2025-03-01-Classes.ipynb/">Classes</a>
            <a href="{{site.baseurl}}/PBL/2025-02-28-Software-Development-Lifecycle.ipynb/mak">Software development cycle</a>
        </div>
    </div>



<div class="container game-ideas">
    <h4>Game Ideas</h4>
    <p>
        Sound effects for character actions such as jumping, acquiring points, and defeating enemies.<br>
        Collectibles like treasures and coins that encourage exploration.<br>
        Different levels that unlock new areas and sprites.<br>
        Interactive NPCs offering quests that reward XP and weapons.<br>
        Character actions that respond to keyboard input.<br>
        XP gain through defeating giants, with level-ups enhancing health and attack power.<br>
        Traps and pits that reset the game on failure.<br>
        A dynamic day/night cycle affecting gameplay.<br>
        New weapons as the character levels up, with varied effects.<br>
        Energy consumption mechanics for actions like walking and jumping.<br>
        Maze quests for added challenges.<br>
        Multiplayer capabilities for teamwork in defeating giants.
    </p>
</div>

