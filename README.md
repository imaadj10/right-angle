# Right Angle
Right Angle is a posture correction program that uses computer vision to detect whether or not a users has good or bad posture and is perfect for remote workers and students!

## Inspiration
In the age of COVID-19, we realized the importance of office ergonomics as we transitioned to remote work and learning. As current co-op interns, it's easy for us to forget how to maintain a healthy posture, as we spend the majority of our days seated at our desk. That's why we were inspired to create **Right Angle**; an application to office workers and students create the healthy habit of correcting their posture!
  
## What it does
**Right Angle** is a program that corrects a user's posture by identifying their body's pose and informs the user whether or not their posture should be corrected. The program first tells the user to sit up straight while it calibrates. Once calibrated, the program will signal to the user if their posture is good or bad!

## How we built it
Our project uses a Flask backend, and OpenCV to monitor the user's position and posture. Our frontend was made using React and Tailwind CSS.

## Challenges we ran into
- Connecting our Flask backend to our frontend

## Accomplishments that we're proud of
- Using OpenCV to accurately determine if a user's posture is good or bad
- Incorporating OpenCV with our frontend to display video in browser
- Designing a stylish looking frontend

## What we learned
- **OpenCV API**
- Integration between **Flask** and **React**

## What's next for Right Angle
- Adding database and authentication systems so users can track how their posture improves!
