# LIAO

A new paradigm for chat.

## Quick start

First run:

1. `docker-compose up -d --build`

Subsequent runs:

1. `docker-compose up -d`

Now you're ready to rumble!

## Setup

To run:

* Create an account on [Docker Hub](https://hub.docker.com/) (you need this to pull the base node image)
* Install [Docker for Mac](https://www.docker.com/docker-mac) (or whatever your platform is)
* If you're on some weird platform, install [docker-compose](https://docs.docker.com/compose/install/)
* Clone repo
* In repo, docker-compose up -d

Now you will have built and run the chat container. You can navigate to the front-end by going to http://localhost:9123/client.html. The server is automatically watching for changes. To look at server logs, do `docker logs -f chat-app`. To inspect all containers do `docker ps -a`.

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

## Documentation

* [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
* [Overview](docs/general): A short overview of the included tools
* [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
* [Testing](docs/testing): How to work with the built-in test harness
* [Styling](docs/css): How to work with the CSS tooling
* [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
* [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.

## Supporters

This project would not be possible without the support by these amazing folks. [**Become a sponsor**](https://opencollective.com/react-boilerplate) to get your company in front of thousands of engaged react developers and help us out!

<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/0/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/1/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/2/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/3/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/4/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/5/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/6/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/7/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/8/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/9/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/9/avatar.svg"></a>

---

<a href="https://opencollective.com/react-boilerplate/backer/0/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/1/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/2/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/3/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/4/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/5/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/6/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/7/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/8/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/9/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/9/avatar.svg"></a>

# Known Issues

* When saving server-side code, causes client bundle to fail until client code file is safed. Workaround is to save a client file if you see an error like:

```
ERROR in ./app/app.js
Module build failed: Error: ENOENT: no such file or directory, open '/www/app/app.js'
```

after working on server-side code.

* Injected reducers use all lower-case state keys, but the generated selector camel-cases the keys, causing a runtime error. Fix: change selector key to lowercase:

```
const selectChatContainerDomain = (state) => state.get('chatcontainer');
```

Error:
```
Uncaught TypeError: Cannot read property 'toJS' of undefined
    at eval (selectors.js?cbd7:20)
    at eval (index.js:75)
    at eval (index.js:35)
    at eval (index.js:89)
    at eval (index.js:35)
    at eval (index.js:85)
    at Function.eval [as mapToProps] (index.js:35)
    at mapToPropsProxy (wrapMapToProps.js:48)
    at Function.detectFactoryAndVerify (wrapMapToProps.js:57)
    at mapToPropsProxy (wrapMapToProps.js:48)
```