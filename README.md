# binaryWatch
-----
I wanted to buy a binary watch for my birthday, but it wouldn't arrive on time
, so I created one.

## Limitations / TODO
-----
I drew the motherboard circuits using [piskel](https://www.piskelapp.com/user/5223935396806656). Animation is achieved by traversing
the sprite sheet. The biggest limitation is that currently the entire CSS using
hard-coded pixel values, *e.g.* the sprite sheet / background is at 1710 by 960. I would like these to be dynamically determined from the
client browser.

## Usage
----
Simply clone this repo, then from the repo's root directory, set up a development server, *e.g.* using Python

```
python3 -m http.server
```

A message will be printed `Serving HTTP on 0.0.0.0 port 8000`. You can specify a port by providing an integer argument after `http.server`, if the 8000 port is already in use. Enjoy!
