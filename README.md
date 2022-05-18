# ecs-arraybuffer
Playground to get a simple automated game to work efficiently.  Starting with a simple entity system that just loops through and updates each entity once per frame.  Next, going to write the same game with an ECS framework.  Lastly, I want to either find or write a basic ECS framework which is backed by SharedArrayBuffer's so we can crank up the number of ships/stations while keeping a consistent framerate.

Simple entity demo: https://daneren2005.github.io/ecs-arraybuffer/simple

# Rules
Stations are the circles, and ships are the triangles.  Each station starts with 100 money to build a ship with.  Ships move towards the nearest enemy until they collide.  When a ship destroys another, that station gets 1 money back to build another ship with.  Each ship starts with 1 shield that regenerates every couple of seconds.  Stations start with 5 shields that regenerate once every 5 seconds.  If one station destroys another, they get money equal to all of the ships that station previously controlled.

I was trying to make a simple game that had a decent number of systems I could utilize when we got to implementing it with an ECS framework.  In the end 99% of the CPU time is spent in nearest enemy lookups, which means that this probably won't be a very good benchmark of multithreading benefits unless we also shard each system's updates.  Looking to both lower the overhead of the enemy lookup and to add other CPU intensive systems to the mix while keeping it relatively simple.