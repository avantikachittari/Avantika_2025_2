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


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML Page</title>
</head>
<body>

    <div>
        <h3>Welcome to My Portfolio</h3>
        <p>This is a brief introduction to my work.</p>
    </div>

    <div>
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

    <div>
        <button onclick="alert('Thank you for pressing this button!')">Subscribe</button>
    </div>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Homepage</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #001f3f; /* Navy background */
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        a {
            display: inline-block;
            padding: 15px 40px;
            background-color: #fff; /* White button */
            color: #001f3f; /* Navy text */
            text-decoration: none;
            border-radius: 30px;
            font-size: 1.2em;
            font-weight: bold;
            transition: background-color 0.3s ease, transform 0.3s ease;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        }
        a:hover {
            background-color: #f4f4f9; /* Light gray on hover */
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <a href="https://www.yourhomepage.com" target="_blank">Visit My Homepage</a>
</body>
</html>

