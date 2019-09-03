# Luna App

## Overview
This application should be an easy-to-use dog event tracker. Each event represents when a dog had last gone outside and what "deed" had ocurred during this walk.

### Some Thoughts / Ideas

#### Widget (Required)
There should be an icon of some sort that is easy to access on either the home page or the lock screen to log the "deed".

#### GPS
Where the event occured. Will the user be logging the event at the same time the "deed" occurs?

#### Workout Detection
Could be used to track length of walk and also be combined with the GPS feature. How do we distinguish between a regular walk and a dog walk?

## Database Design
This application will use MongoDB for the data. The initial schema design should be relatively straight forward.
- `Pet`
  - `name: string`
  - `walks: Walk[]`
- `Walk`
  - `start: Date`
  - `end: Date`
  - `deeds: Deed[]`
- `Deed`
  - `timestamp: Date`
  - `type: string`
  
Each model will need CRUD routes. For this reason, perhaps it would be better to use Graph QL over a REST API. This should be doable considering the low amount of used models.

## UI Design
Last walked information should be easy to see at a quick glance. Particularly the last logged deeds. The pets detail page should be prioritized over the other pages and should act as the first iteration of the project.

- Home screen
  - Active pet detail page
- Hamburger menu
  - Manage pets
  - List of pets
- Manage Pets
  - Set active pet
  - Add pet
  - Delete pet
- Pet Detail
  - Last walk length
  - Last walk time range
  - Latest timestamp of each deed.
  - Google Maps geolocation (later feature).
  
