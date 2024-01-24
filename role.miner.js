var roleMiner =
{
    run: function(creep)
    {   
        // If creep is bringing energy to mainBase but ran out of energy
        if (creep.memory.working == true && creep.carry.energy == 0)
        {
            // switch state
            creep.memory.working = false
        }
        
        // If creep is mining energy but is full
        if (creep.memory.working == true && creep.carry.energy == creep.carryCapacity)
        {
            //Switch state
            creep.memory.working = true
        }
        
        // Check if there is free space to carry stuff
        if (creep.memory.working = false)
            // If there is, gather energy until no more space
        {   
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(sources[1]);
                creep.say('Mining!');
            }
        }
        else
        
        // go to the spawn and transfer energy
        {   
            if (creep.transfer(Game.spawns['mainBase'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(Game.spawns['mainBase']);
                creep.say('Transfer!');
            }
            else if (Game.spawns['mainBase'].store == 300)
            {
                creep.transfer(StructureExtension)
                if (creep.transfer((StructureExtension), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(creep.room.find(StructureExtension));
                    creep.say('Transfer!');
                }
                else
                {
                    if 
                    (creep.transfer((StructureExtension), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                    creep.moveTo.StructureExtension;
                    creep.say('Transfer!');
                }
            }
        }
    }
};
module.exports = roleMiner;