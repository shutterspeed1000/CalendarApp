# Work Day Scheduler

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## Table of Contents

- [Features](#features)
- [Link to live site](#link-to-live-site)
- [Screenshots](#screenshots)
- [License](#license)

## Features

Site contains the following requieremts based on the Acceptance Criteria:

- Page loads planner and shows any data stored locally
- Current day is at the top of the screen
- Blocks show hours from 9 to 5
- Time is colocodes and changes based on time from date.js
- Items can be entered into the blocks and saved by clikcing the button
- Messages is shown when data is saved
- Data presistes when page is refreshed

Technology used based on class materal:

- objects
- Jquery
- this
- loop
- Jquery transversal
- IF/Else
- Operators
- Functions
- CSS
- HTML

## Link to live site

<https://shutterspeed1000.github.io/CalendarApp/>

## Screenshots

![Screenshot of application](Assets/Images/CalAppSS.png)

## License

Copyright (c) 2023 Sean Worrell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.