# ember-jwplayer

`ember-jwplayer` is a component that wraps the JWPlayer plugin.

This is still a WIP. We're porting all of the events.

### Installation

From inside your ember-cli project, run the following:

```bash
ember install ember-jwplayer
```

#### Installation for ember-cli 0.1.5 - 0.2.2

```bash
ember install:addon ember-jwplayer
```

### JWPlayer

#### You need to add your API KEY on your `config/environment` file.

```javascript
var ENV = {
  jwplayer: {
    key: 'API-KEY-GOES-HERE'
  }
}
```

#### Now you can add the components on your templates.

```hbs
{{ember-jwplayer
  file=model.file
  autostart=true
  repeat=false
  controls=true
}}
```

#### JWPlayer events will be send from the component to your controller or route.

```hbs
{{ember-jwplayer
  play='onPlay'
  pause='onPause'
  complete='onComplete'
}}
```

## Customization
This addon supports partial range of jwplayer configuration options.

* accessibility
* file
* image
* title
* description
* mediaid
* mute
* autostart
* repeat
* abouttext
* aboutlink
* controls
* width
* height
* visualplaylist
* displaytitle
* displaydescription
* stretching
* hlshtml
* primary
* flashplayer
* base


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
