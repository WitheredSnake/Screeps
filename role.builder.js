var roleBuilder = 
{
    run: function(creep)
    {   // Stop building when out of energy, announce that you'll start mining
        if (creep.memory.building && creep.carry.energy == 0)
        {
            creep.memory.building = false;
            creep.say('Mining!');
        }
        
        // Stop mining when you hit max carry capacity, announce that you'll start building!
        if (!creep.memory.building && creep.carry.energy == creep.carryCapacity)
        {
            creep.memory.building = true;
            creep.say('Building!');
        }
        
        // If carry capacity is full, find a construction site to go build
        if (creep.memory.building)
        {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (targets.length)
            {
                if (creep.build(targets[0]) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(targets[0]);
                }
            }
        }
        
        else
        
        // If not building, find and harvest energy
        {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(sources[0]);
            }
        }
    }
}




module.exports = roleBuilder;