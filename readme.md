two clocks, one analog with roatating hands.
one digital with changing numbers.

- I could have definitely used one js file, but I just wanted to keep things separate for ease and less confusion.

- i first started this for practice, didnt plan on anything being responsive, but the perfectionist in me wont let go without making it responsive, So i'll come back and add media queries and we're done.

- calculate clock hand degrees
  -- minute and second hands were simple. just multiply them by 6 because 60 seconds in an minute(60 mins in an hour), and we need the hands to rotate 360degrees. so 360/60 = 6. so just take the current seconds and add 6 degrees to place it correctly on the clock. same for the minute hand.
  -- the hour hand was a bit more tricky. Since there are 60 minutes in an hour, and the hour hand moves 30 degrees every 60 minutes, that means that the hour hand moves 30 / 60, or 0.5 degrees every minute. Therefore, the angle of the hour hand can be calculated by multiplying the hour by 30, multiplying the minutes by 0.5, and adding those two results. If we were given the time 8:15, we'd know the hour hand is a bit past the 8. When it's at the 8, the hour hand is 8 _ 30, or 240 degrees past the 12. The fifteen minutes are another 15 _ 0.5, or 7.5 degrees, more. In total, therefore, at 8:15, the hour hand is at an angle of 247.5 degrees.

-domContentLoaded so the clock starts on the right time as soon as the page loads
