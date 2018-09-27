/*
CS4242-Online
Mac Erickson
Student ID #1: 000 78 6549
Assignment #: #1
Due Date: 09/17/2018
*/

// World Class that represents the world as visible by the reflex agent.
class World
{
    // The constructor for the World object contains an arbitrary size allowing any number
    // of side-by-side rooms.
    constructor(size)
    {
        // The array of rooms the World object represents.
        this.rooms = [];
        // The current room index the World object is focused on
        this.currentRoom = 0;
        // The overall number of rooms.
        this.size = size;

        // Iterate through the rooms array and set them as NOT Dirty (Clean)
        for (let i = 0; i < size; i++)
        {
            this.rooms.push(
                {
                    dirty: false
                });
        }
    }

    // Sets the room number that the Agent will start in. (current room)
    setStartingRoom(room)
    {
        this.currentRoom = room;
    }

    // Sets a specific rooms dirty property to true or false.
    setDirty(room, isDirty)
    {
        this.rooms[room].dirty = isDirty;
    }

    // The World objects reaction to a command either from an Agent or specified directly.
    action(command)
    {
        switch(command)
        {
            // If the command is to "SUCK" the room will be cleaned (dirty = false)
            case 'SUCK':
                this.rooms[this.currentRoom].dirty = false;
                break;
            // If the command is to go "LEFT" the world will set its focused or "Current" room to the left room
            case 'LEFT':
                this.currentRoom = 0;
                break;
            // If the command is to go "RIGHT" the world will set its focused or "Current" room to the right room
            case 'RIGHT':
                this.currentRoom = 1;
                break;
        }
        return command;
    }
}

// This function will return True once every room in the World is clean.
function checkClean(world)
{
    let clean = true;
    for (let i = 0; i < world.size; i++)
    {
        if (world.rooms[i].dirty == true)
        {
            clean = false;
        }
    }
    return clean;
}

// This simple reflex Agent simply makes a decision based on the World as an input.
function reflexAgent(world)
{
    // If the room is "Dirty" return the SUCK command to be passed to the world.
    if (world.rooms[world.currentRoom].dirty)
    {
        return 'SUCK';
    }
    // If the current room isnt "Dirty" and we are in the Left room return the RIGHT command.
    else if (world.currentRoom == 0)
    {
        return 'RIGHT';
    }
    // If the current room isnt "Dirty" and we are in the Right room return the LEFT command.
    else if (world.currentRoom == 1)
    {
        return 'LEFT';
    }
}

// This function waits for a specific amount of time since the code runs so fast the milliseconds are too short.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
