var autoMiner =
{
    var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miners');
    console.log('Miners: ' + miners.length);
    
    if (miners.length < 2)
        {
            var minerName = 'Miner' + Game.time;
            console.log('Spawning new miner: ' + minerName);
            Game.spawns['mainBase'].spawnCreep([WORK, CARRY, MOVE], minerName, {memory: {role: 'miners'}});
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
}

module.exports = autoMiner;