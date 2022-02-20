# anc-front-end-gui

## Front End For ANC Helper App
 - build it here 1st, then use server 2 Atlas API code
 - MVP, described in detail below, will b simple logger app
 - can b dummy courier/dispatch accounts or not
 - presentation most important

 ## ANC Helper APP

  ### MVP
  - Simple courier logger app
  - successfully upload & save courier logs
  - 3 Pages:
    * Splash -> Synthesize welcome/about/purpose/login
    * Profile -> name, unit number, start log (if 1 not started already)
    * Log -> log-sheet => log-row => log=element

  - Color theme -> black, yellow, grey, greyscale
   * Black background
   * Yellow header/title text
   * Yellow borders/trim
    -> Notepad
     - Light yellow background
     - Grey lines
     - Black text
  - Logsheet should look like pad of paper (yellow/black/greyscale background pad of paper)
  
  - Log.js & child components sketched out on pad of paper

  ### Log Build Plan Notes:
   #### Log.js Outline:
    - Components & subComponents:
      - ComponentsStartUpperCase
      - subComponentsStartLowerCase
    - AttemptDisposition
      1. will need its own subcomponents -> not figured out yet
    - LogHeader
      1. courierID
      2. date
      3. ODO
      4. prevDayNotes
    - LogEntry
      1. time
      2. arrive
      3. depart
      4. duration
      5. location
      6. success
      7. pickupDeliver
      8. notes