var roleUpgrader = 
{
    run: function(creep)
    {
        if (creep.memory.upgrading && creep.carry.energy == 0)
        {
           creep.memory.upgrading = false;
           creep.say('Mining!')
        }
        if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity)
        {
            creep.memory.upgrading = true;
            creep.say('Upgrading!');
        }
        
        if (creep.memory.upgrading)
        {
            var upGrade = creep.room.find(creep.room.controller);
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(creep.room.controller);
            }
            
        }
        else
        {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(sources[1]);
            }
        }
    }
}

module.exports = roleUpgrader;