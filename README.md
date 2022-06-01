# ECS SharedArrayBuffer Playground
Playground to get a simple automated game to work efficiently.  Starting with a simple entity system that just loops through and updates each entity once per frame.  Next, wrote the same game with an ECS framework.  Lastly, I want to either find or write a basic ECS framework which is backed by SharedArrayBuffer's so we can crank up the number of ships/stations while keeping a consistent framerate.

Demo: https://daneren2005.github.io/ecs-sharedarraybuffer-playground/

# Rules
Stations are the circles, and ships are the triangles.  Each station starts with 100 money to build a ship with.  Ships move towards the nearest enemy until they collide.  When a ship destroys another, that station gets 1 money back to build another ship with.  Each ship starts with 1 shield that regenerates every couple of seconds.  Stations start with 5 shields that regenerate once every 5 seconds.  If one station destroys another, they get money equal to all of the ships that station previously controlled.

I was trying to make a simple game that had a decent number of systems I could utilize when we got to implementing it with an ECS framework.  Looking to both lower the overhead of the enemy lookup and to add other CPU intensive systems to the mix while keeping it relatively simple.  My main goal is to tax the system while being easy to multithread.

# Implementations
## Simple entity.update
All of the logic is contained within each entitie's update method.  This is going to be the slowest of the methods.

https://daneren2005.github.io/ecs-sharedarraybuffer-playground/#/simple

## BitECS
This is a rewrite using a ECS framework: https://github.com/NateTheGreatt/bitECS.  I don't think that it claims to be the fastest one around, but I'm pretty sure it is fast enough to representative of an ECS framework.  This implementation runs the different systems at different rates (ie: velocity every tick, but collisions every other tick, and deciding where to go next only a few times a second).  This is possible to do in the simple entity implementation as well, but ECS makes it way easier.  Heavy systems are run in chunks so that if we can finish the run in 10ms increments over the 200ms runtime, the framerate stays good.  If we end up needing more than 200ms to compute the system, it runs until it is done in order to not get too far behind.  This puts an upper limit on how many entities we can process before it starts to stutter.

This is my first attempt to use an ECS system, and I think I tried to hard to copy paste the simple version's logic.  A lot of this involves referencing the components in hard to follow ways, and the type system for bitecs got confused pretty easily.  This would probably look significantly better if I had just done this without my world/entity wrapper.

https://daneren2005.github.io/ecs-sharedarraybuffer-playground/#/bitecs

## Custom ECS backed by SharedArrayBuffers
In this version, we have a quick and dirty ECS system where the components are hard coded and each SharedArrayBuffer is a large fixed length int array.  Dead entity id's are recycled and re-used again.  Each component is using SharedArrayBuffers and Atomics to load and update properties.  Each system runs in it's own thread.  All the main thread is doing every frame is looping through every entity and updating it's visual properties (ie: position, angle, etc...).  As a huge number of ships are added stuff starts to not work 100% correctly since some of the sub-systems take too long to process, but visually continue to hum along nicely.  That could probably be fixed by sharding the heavy systems into multiple threads.  For a proof of concept I think this is good enough.

https://daneren2005.github.io/ecs-sharedarraybuffer-playground/#/multithreaded

### Things that suck that I don't know how to solve
* Atomics only supports integers - POC used / 1000 for 4 decimal places, but reduces how big the numbers can be and possibly isn't precise enough in some cases.  It also adds it's own mental and computational overhead and makes the code uglier.

### Things that suck about my implementation but can be solved
* I copied bitECS way of having a single entity id used in components even though not all entities use every component.  Going to end up with a lot of wasted memory.
* Systems start to get behind as the number of entities go up.  This could be helped by sharding them into multiple threads.
* Querying loops over all possible entities - could be cleaned up if we kept a cached list of component entities somewhere.