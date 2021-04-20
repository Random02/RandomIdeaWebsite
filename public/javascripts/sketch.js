/// <reference path="../../TSDef/p5.global-mode.d.ts" />

"use strict";

let rndText;
let mousePressValue;

var tableDataTitle=[];
var tableData=[];
let currentTitle;

function gotTable(data)
{
    for (let c = 0; c< data.getColumnCount(); c++)
    {
        for (let r = 0; r < data.getRowCount(); r++) 
        {
            if (r === 0) 
            {
                tableDataTitle.push(tableData.length);
                tableData.push(data.getString(r, c));

                console.log(data.getString(r, c));
            }
            else 
            {
                if (data.getString(r, c) !== "")
                {
                    tableData.push(data.getString(r, c));
                    console.log(data.getString(r, c));
                }
            }
        }
    }
    tableDataTitle.push(tableData.length)
    
    console.log(tableDataTitle);
    console.log(tableData);
}

function preload()
{
    loadTable("https://docs.google.com/spreadsheets/d/e/2PACX-1vSqn6VbPVVUEd_LQQTWprnJk8QC7fITiYQnI_GEz382dyXQWdM6JFnM-XCgVKheOwI50CaBQ6jFpSiU/pub?gid=0&single=true&output=csv"
    ,"csv", gotTable);
}

function setup() {
    createCanvas(200, 200);
   
    textAlign(CENTER, CENTER);
    mousePressValue=0;
    currentTitle=0;

    console.log(tableDataTitle[currentTitle]+1);
    console.log(tableDataTitle[currentTitle+1]);
}

function draw() {
    background(51);
    ellipse(mouseX, mouseY, 20, 20);
    
    if (mousePressValue === 1)
    {
        var fromindex = tableDataTitle[currentTitle]+1;
        var toindex = tableDataTitle[currentTitle+1];

        console.log(fromindex + " " + toindex);
        rndText = random(fromindex, toindex);
        console.log(int(rndText));
        
    }

    //text title
    fill(255,255,255);
    textSize(20)
    text(tableData[(tableDataTitle[currentTitle])],width/2, height-175);
    
    //text meat
    textSize(width/3);
    
    text(tableData[int(rndText)], width/2, height/2);
    

    mousePressValue = 0;
}

function mousePressed()
{
    mousePressValue = 1;
}