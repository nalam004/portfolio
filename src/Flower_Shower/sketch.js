import React from "react";
import Sketch from "react-p5";

let bg;
let basket;
let hearts = [];
let heart0Y = 15;
let heart1Y = 15;
let heart2Y = 15;
let Y = 0;
let X = 0;
let diameter = 20;
let speed = 0.5;
let score = 0;
let misses = 0;
let myFont;

export default () => {
    const setup = (p5, canvasParentRef) => {
		p5.createCanvas(400, 400).parent(canvasParentRef);
        p5.noCursor();
        myFont = p5.loadFont('Retro.ttf');
        sound = p5.loadSound("pop.mp3");
        bg = p5.loadImage('img/bg.png');
        basket = p5.loadImage('img/basket.png');
        flower = p5.loadImage("img/flower.png");
        for (var i = 0; i < 3; i++) {
            hearts[i] = p5.loadImage("img/heart.png");
        }
	};

	const draw = (p5) => {
        p5.imageMode(CORNER);
        p5.background(bg);
        p5.imageMode(CENTER);
        heart1 = p5.image(hearts[0], 15, heart0Y, 40, 40);
        heart2 = p5.image(hearts[1], 35, heart1Y, 40, 40);
        heart3 = p5.image(hearts[2], 55, heart2Y, 40, 40);
        p5.noStroke();
        p5.imageMode(CENTER);
        p5.image(flower, X, Y, diameter, diameter);
        Y = Y + speed;
        p5.fill(255, 255, 255, 100);
        p5.image(basket, mouseX, mouseY, 80, 80);
        distance = p5.dist(X, Y, mouseX, mouseY);

        if (distance < 15) {
            ++score;
            sound.play(); 
            Y = 0;
            X = p5.random(width);
            speed = p5.random(1, 4);
            diameter = p5.random(10, 30);
        }
  
        if (Y > height) {
            ++misses;
            if (misses == 1) heart2Y = 500;
            if (misses == 2) heart1Y = 500;
            Y = 0;
            X = p5.random(width);
            speed = p5.random(1, 4);
            diameter = p5.random(10, 30);
        }
  
        p5.fill(0, 254, 202);
        p5.textAlign(LEFT);
        p5.textSize(15);
        p5.textFont(myFont);
        p5.text('Flowers Caught: ' + score, 5, 390);
  
        if (misses > 2) {
            heart0Y = 500
            Y = width + 10;
            X = height + 10;
            p5.fill(0, 100, 0);
            p5.textFont(myFont);
            p5.textAlign(CENTER);
            p5.textSize(20);
            p5.text('Game Over :(', width/2, height/2);
            p5.textSize(12);
            p5.text('Click the mouse anywhere to restart.', width/2, height/2 + 30);
            if(mouseIsPressed) restart();
        }

    }
    
    function restart() {
        X = 100;
        Y = 0;
        speed = 0.5;
        score = 0;
        misses = 0;
        heart0Y = 15;
        heart1Y = 15;
        heart2Y = 15;
    }

	return <Sketch setup={setup} draw={draw} />;
};