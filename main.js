var roleMiner = require('role.miner');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function ()
{
    
    // Notify how many upgraders are alive in console
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgraders');
    console.log('Upgraders: ' + upgraders.length);
    
    // if less than 5 upgraders alive, spawn new one
    if (upgraders.length < 3)
    {
        var upgraderName = 'upgrader' + upgraders + Game.time;
        console.log('Spawning new upgrader: ' + upgraderName);
        Game.spawns['mainBase'].spawnCreep([WORK, CARRY, MOVE], upgraderName, {memory: {role: 'upgraders'}});
    }
    
    if (Game.spawns['mainBase'].spawning)
    {
        var spawningCreep = Game.creeps[Game.spawns['mainBase'].spawning.name];
        Game.spawns['mainBase'].room.visual.text(
            'Spawning' + spawningCreep.memory.role,
            Game.spawns['mainBase'].pos.x + 1,
            Game.spawns['mainBase'].pos.y,
            {align: 'left', opacity: 0.8});
    }
    
    for (var name in Game.creeps)
    {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'miners')
        {
            roleMiner.run(creep);
        }
        else if (creep.memory.role == 'upgraders')
        {
            roleUpgrader.run(creep);
        }
        else if (creep.memory.role == 'builders')
        {
            roleBuilder.run(creep);
        }
    }
}