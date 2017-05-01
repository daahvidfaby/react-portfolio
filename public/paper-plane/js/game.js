(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'ptpmu4');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  

  game.state.start('boot');
};
},{"./states/boot":6,"./states/gameover":7,"./states/menu":8,"./states/play":9,"./states/preload":10}],2:[function(require,module,exports){
'use strict';

var Background = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'background', frame);
  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;
};

Background.prototype = Object.create(Phaser.Sprite.prototype);
Background.prototype.constructor = Background;

Background.prototype.update = function() {
  if (this.x < 0) {
    this.alive = false;
  }
};

module.exports = Background;

},{}],3:[function(require,module,exports){
'use strict';

var Ennemy = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'ennemy', 0);
  this.game.physics.arcade.enableBody(this);
  this.scale.setTo(1);
  this.anchor.setTo(0.5,0.5)
  this.animations.add('fly');
  this.animations.play('fly', 6, true);
};

Ennemy.prototype = Object.create(Phaser.Sprite.prototype);

Ennemy.prototype.constructor = Ennemy;
Ennemy.prototype.checkWorldBounds = function() {
  if(!this.inWorld) {
    this.exists = false;
  }
};
Ennemy.prototype.update = function() {
// this.checkWorldBounds();
};

Ennemy.prototype.reset = function(x, y) {
  // this.reset(0,0);
  this.x = x;
  this.y = y;
  this.hasScored = false;
  this.exists = true;
};



module.exports = Ennemy;

},{}],4:[function(require,module,exports){
'use strict';

var Player = function(game, x, y, frame) {
  var color = sessionStorage.getItem('paper_plane_color');
  if (!color) {
    Phaser.Sprite.call(this, game, x, y, 'player', frame);
  } else if (color == 'blanc') {
    Phaser.Sprite.call(this, game, x, y, 'player', frame);
  } else if (color == 'bleu') {
    Phaser.Sprite.call(this, game, x, y, 'playerB', frame);
  } else if (color == 'rose') {
    Phaser.Sprite.call(this, game, x, y, 'playerR', frame);
  }
  this.game.physics.arcade.enableBody(this);
  this.body.collideWorldBounds = true;
  this.anchor.set(0.5);
  this.scale.setTo(0.5, 0.5);
  this.animations.add('left', [0, 1, 2, 3, 4], 10, true);
  this.animations.add('right', [5, 6, 7, 8], 10, true);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
  this.x = this.game.input.x;
  this.y = this.game.input.y;
};

module.exports = Player;

},{}],5:[function(require,module,exports){
'use strict';

var Star = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'star', 0);
  this.game.physics.arcade.enableBody(this);
  this.scale.setTo(0.2);
  this.anchor.setTo(0.5,0.5);
};

Star.prototype = Object.create(Phaser.Sprite.prototype);

Star.prototype.constructor = Star;

Star.prototype.update = function() {
};
module.exports = Star;

},{}],6:[function(require,module,exports){

'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],7:[function(require,module,exports){
'use strict';

function GameOver() {}

GameOver.prototype = {
  preload: function() {
  },
  create: function() {
    var distance = this.game.state.states['play'].distance;
    var elapsedTime = this.game.state.states['play'].elapsedTime;
    var starsScore = this.game.state.states['play'].starsScore;
    var totalScore = (distance - elapsedTime) * (1 + starsScore);
    var scoreStyle = {
      font: '45px Arial',
      fontStyle: 'bold',
      fill: '#f38a94',
      align: 'center'
    };
    var titleStyle = {
      font: '15px Arial',
      fill: '#f38a94',
      align: 'center'
    };
    var mainTitleStyle = {
      font: '40px Arial',
      fill: '#f38a94',
      align: 'center'
    };
    var replayStyle = {
      font: '35px Arial',
      fill: '#f38a94',
      align: 'center'
    };

    var scoreSubmited = false;
    this.background = this.game.add.sprite(0, 0, 'gameover');
    this.container = this.game.add.sprite(70, 60, 'menucontainer');
    this.container.alpha = 0.7;

    this.logo = this.game.add.sprite(665, 100, 'logo');
    this.logo.anchor.setTo(0.5, 0.5);
    this.logo.scale.setTo(0.35);

    this.mainTitle = this.game.add.text(this.game.width/2, 100, 'GAME OVER', mainTitleStyle);
    this.mainTitle.anchor.setTo(0.5, 0.5);

    this.distanceText = this.game.add.text(150, 200, distance + ' m', scoreStyle);
    this.distanceText.anchor.setTo(0.5, 0.5);
    this.distanceTitle = this.game.add.text(150, 150, 'DISTANCE', titleStyle);
    this.distanceTitle.anchor.setTo(0.5, 0.5);

    this.timeText = this.game.add.text(300, 200, elapsedTime + ' s', scoreStyle);
    this.timeText.anchor.setTo(0.5, 0.5);
    this.timeTitle = this.game.add.text(300, 150, 'TEMPS', titleStyle);
    this.timeTitle.anchor.setTo(0.5, 0.5);

    this.multiplicateText = this.game.add.text(450, 200, 'x', scoreStyle);
    this.multiplicateText.anchor.setTo(0.5, 0.5);
    this.timeTitle = this.game.add.text(490, 150, 'BONUS', titleStyle);
    this.timeTitle.anchor.setTo(0.5, 0.5);

    this.timeText = this.game.add.text(500, 200, starsScore + '', scoreStyle);
    this.timeText.anchor.setTo(1, 0.5);
    this.star = this.game.add.sprite(500, 200, 'star');
    this.star.scale.setTo(0.15);
    this.star.anchor.setTo(-0.2, 0.65);

    $('#ptpmu4').css('cursor', 'auto');
    $('#ptpmu4').append('<form action="assets/php/score.php" method="post" id="scoreForm">');
    $('#scoreForm').append('<input type="text" name="pseudo" placeholder="Entrez votre pseudo">');
    $('#scoreForm').append('<input type="submit" value="S\'enregistrer">');

    $('#scoreForm input[type=submit]').click(function(e) {
      e.preventDefault();
      if (!scoreSubmited) {
        scoreSubmited = true;
        createUser();
        getScores();
      }
    });

    function createUser() {
      $.ajax({
          url: 'assets/php/score.php',
          type: 'POST',
          data: $('#scoreForm').serialize() + '&score=' + totalScore
        })
        .success(function() {
          alert('Votre score a bien été enregistré !');
        })
    }

    function getScores() {
      $.getJSON('assets/php/scoreList.php', function(data) {
        $('#ptpmu4 #scoreTable').remove();
        displayScores(data);
      });
    }

    function displayScores(data) {
      var scoreTable = [
        '<div id="scoreTable">',
        '<span>Meilleurs scores</span>',
        '<table>',
        '<tbody>',
        '<tr>',
        '<td>1</td>',
        '<td>' + data[1].pseudo + '</td>',
        '<td>' + data[1].score + '</td>',
        '</tr>',
        '<tr>',
        '<td>2</td>',
        '<td>' + data[2].pseudo + '</td>',
        '<td>' + data[2].score + '</td>',
        '</tr>',
        '<tr>',
        '<td>3</td>',
        '<td>' + data[3].pseudo + '</td>',
        '<td>' + data[3].score + '</td>',
        '</tr>',
        '</tbody>',
        '<thead>',
        '<tr>',
        '<td>Rang</td>',
        '<td>Pseudo</td>',
        '<td>Score</td>',
        '</tr>',
        '</thead>',
        '</table>',
        '</div>'
      ];
      $('#ptpmu4').append(scoreTable.join(''));

      $('.score table').empty();

      $.each(data, function(key, val){
        $('.score table').append('<tr><td>'+ key +'</td><td>'+ val.pseudo +'</td><td>'+ val.score +'</td>')
      });
    }

    getScores();

    this.totalText = this.game.add.text(650, 200, totalScore + '', scoreStyle);
    this.totalText.anchor.setTo(0.5, 0.5);
    this.timeTitle = this.game.add.text(650, 150, 'TOTAL', titleStyle);
    this.timeTitle.anchor.setTo(0.5, 0.5);

    this.instructionText = this.game.add.text(this.game.world.centerX, 560, 'Clique pour rejouer', replayStyle);
    this.instructionText.anchor.setTo(0.5, 0.5);
  },
  update: function() {
    if (this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};
module.exports = GameOver;

},{}],8:[function(require,module,exports){
'use strict';

function Menu() {}
Menu.prototype = {
  preload: function() {},
  create: function() {
    $('#ptpmu4').css('cursor', 'pointer');
    var buttonStyle = {
      font: '50px Arial',
      fill: '#f38a94',
      align: 'center'
    };
    this.background = this.game.add.sprite(0, 0, 'menubackground');
    this.container = this.game.add.sprite(70, 60, 'menucontainer');
    this.container.alpha = 0.7;

    this.logo = this.game.add.sprite(this.game.width / 2, 200, 'logo');
    this.logo.anchor.setTo(0.5, 0.5);

    this.button = this.game.add.text(this.game.width / 2, 400, 'JOUER', buttonStyle);
    this.button.anchor.setTo(0.5, 0.5);
  },
  update: function() {
    if (this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};
module.exports = Menu;

},{}],9:[function(require,module,exports){
'use strict';
var Background = require('../prefabs/background');
var Ennemy = require('../prefabs/ennemy');
var Player = require('../prefabs/player');
var Star = require('../prefabs/star');

function Play() {}
Play.prototype = {
  create: function() {


    this.gameVariables = {
      actualBackground: 1,
      ennemyTime: 0,
      ennemyTimeReset: 200,
      playerMode: 'normal'
    };
    this.distance = 0;
    this.elapsedTime = 0;
    this.starsScore = 0;
    this.timeManager = this.game.time.events.loop(Phaser.Timer.SECOND, this.addOneToTime, this);
    this.timeManager.timer.start();
    this.starManager = this.game.time.events.loop(Phaser.Timer.SECOND * 6, this.starRandomGenerate, this);
    this.starManager.timer.start();
    this.background = this.game.add.group();
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.displayBackground(0, 15);
    this.displayBackground(300, 11);
    this.displayBackground(600, 13)
      // this.input.onDown.addOnce(this.startGame, this);
    this.player = new Player(this.game, this.game.world.centerX, this.game.world.centerY, 1);

    this.game.add.existing(this.player);
    this.numberOfTiles = 1;
    this.backgroundsNumber = 10;
    this.ennemies = this.game.add.group();
    this.stars = this.game.add.group();

    var style = {
      font: '40px Arial',
      fill: '#8ea5a9',
      align: 'center'
    };
    this.meterText = this.game.add.text(800, 0, '0 m', style);
    this.meterText.anchor.setTo(1.5, -0.5);
  },
  update: function() {
    this.game.debug.spriteBounds(this.player);
    this.player.getBounds();
    $('#ptpmu4').find('input').remove();
    $('#ptpmu4').find('#scoreTable').remove();
    $('#ptpmu4').find('#scoreTable').css('display', 'none');
    $('#ptpmu4').css('cursor', 'none');
    var lastBackground = this.background.children[this.background.children.length - 1];
    if (lastBackground.x <= 614) {
      this.backgroundGenerate();
      this.numberOfTiles++;
    }

    if (lastBackground.x < 800 && lastBackground.x > 798) {
      this.distance++;
      this.meterText.setText(this.distance.toString() + ' m');
    } else if (lastBackground.x < 700 && lastBackground.x > 698) {
      this.distance++;
      this.meterText.setText(this.distance.toString() + ' m');
    } else if (this.background.children[this.background.children.length - 2].x < 600 && this.background.children[this.background.children.length - 2].x > 598) {
      this.distance++;
      this.meterText.setText(this.distance.toString() + ' m');
    }

    if (this.numberOfTiles == this.backgroundsNumber) {
      this.backgroundChoice();
      this.displayBackground(900, this.game.rnd.integerInRange(16, 19));
    }
    this.background.setAll('body.velocity.x', -200);
    this.ennemies.setAll('body.velocity.x', -300);
    this.gameVariables.ennemyTime++;
    if (this.gameVariables.ennemyTime == this.gameVariables.ennemyTimeReset) {
      this.gameVariables.ennemyTime = 0;
      this.generateEnnemy();
    }

    if (this.game.input.activePointer.x < this.game.world.width && this.game.input.activePointer.x > this.game.world.width - 300) {
      this.background.setAll('body.velocity.x', -400);
      this.ennemies.setAll('body.velocity.x', -500);
      this.stars.setAll('body.velocity.x', -500);
      this.player.scale.x = 0.8;
      if (this.game.input.activePointer.y > 0 && this.game.input.activePointer.y < 200) {
        this.player.angle = -20;
      } else if (this.game.input.activePointer.y > 200 && this.game.input.activePointer.y < 400) {
        this.player.angle = 0;
      } else if (this.game.input.activePointer.y > 400 && this.game.input.activePointer.y < 800) {
        this.player.angle = 20;
      }

    }
    else if (this.game.input.activePointer.x < this.game.world.width - 200 && this.game.input.activePointer.x > this.game.world.width - 500) {
      this.background.setAll('body.velocity.x', -200);
      this.ennemies.setAll('body.velocity.x', -300);
      this.stars.setAll('body.velocity.x', -300);
      this.player.width = 180;
      if (this.game.input.activePointer.y > 0 && this.game.input.activePointer.y < 200) {
        this.player.angle = -20;
      } else if (this.game.input.activePointer.y > 200 && this.game.input.activePointer.y < 400) {
        this.player.angle = 0;
      } else if (this.game.input.activePointer.y > 400 && this.game.input.activePointer.y < 800) {
        this.player.angle = 20;
      }
    }
    //  else if (this.game.input.activePointer.x < this.game.world.width - 500 && this.game.input.activePointer.x > 0) {
    //   this.background.setAll('body.velocity.x', -100);
    //   this.ennemies.setAll('body.velocity.x', -200);
    //   this.stars.setAll('body.velocity.x', -200);
    //   if (this.game.input.activePointer.y > 0 && this.game.input.activePointer.y < 200) {
    //     this.player.frame = 3;
    //   } else if (this.game.input.activePointer.y > 200 && this.game.input.activePointer.y < 400) {
    //     this.player.frame = 0;
    //   } else if (this.game.input.activePointer.y > 400 && this.game.input.activePointer.y < 800) {
    //     this.player.frame = 6;
    //   }
    // }
    this.ennemies.forEach(function(ennemy) {
      var collide = this.game.physics.arcade.distanceBetween(this.player, ennemy);
      if (collide < this.player.width / 2 - 10 && this.game.physics.arcade.intersects(this.player,ennemy)) {
        this.deathHandler();
      }
    }, this);

    this.stars.forEach(function(star) {
      var collide = this.game.physics.arcade.distanceBetween(this.player, star);
      if (collide < this.player.width / 2 - 10) {
        this.addStarScore();
        star.body.y = -900;
        star.alive = false;
      }
    }, this);

  },
  displayBackground: function(x, frame) {
    var background = new Background(this.game, x, 0, frame);
    this.background.add(background);
  },
  backgroundGenerate: function() {
    if (this.numberOfTiles != 0) {
      if (this.gameVariables.actualBackground == 1) {
        var frame = this.game.rnd.integerInRange(11, 15);
        this.displayBackground(899, frame);
      } else if (this.gameVariables.actualBackground == 2) {
        var frame = this.game.rnd.integerInRange(0, 9);
        this.displayBackground(899, frame);
      }
    }
  },
  generateEnnemy: function() {
    var ennemyY = this.game.rnd.integerInRange(22, 588);
    var ennemy = this.ennemies.getFirstExists(false);
    if (!ennemy) {
      ennemy = new Ennemy(this.game, 800, ennemyY);
    }
    ennemy.reset(this.game.width + ennemy.width, ennemyY);
    this.ennemies.add(ennemy);
    this.gameVariables.ennemyTimeReset = this.game.rnd.integerInRange(20, 80);
  },
  starRandomGenerate: function() {
    if (this.distance > 20) {
      var trueOrFalse = this.game.rnd.integerInRange(0, 2);
      if (trueOrFalse == 1) {
        this.starDisplay();
      }
    }
  },
  starDisplay: function() {
    var starY = this.game.rnd.integerInRange(22, 588);
    var star = new Star(this.game, 800, starY);
    this.stars.add(star);
  },
  addStarScore: function() {
    this.starsScore++;
  },
  backgroundChoice: function() {
    if (this.gameVariables.actualBackground == 1) {
      this.gameVariables.actualBackground = 2;
    } else if (this.gameVariables.actualBackground == 2) {
      this.gameVariables.actualBackground = 1;
    }
    this.numberOfTiles = 0;
    this.backgroundsNumber = this.game.rnd.integerInRange(10, 20);
  },
  addOneToTime: function() {
    this.elapsedTime++;
  },
  deathHandler: function() {
    this.firstBackground = this.background.children[this.background.length - 3];
    this.secondBackground = this.background.children[this.background.length - 2];
    this.thirdBackground = this.background.children[this.background.length - 1];
    this.game.state.start('gameover');
  }
};
module.exports = Play;

},{"../prefabs/background":2,"../prefabs/ennemy":3,"../prefabs/player":4,"../prefabs/star":5}],10:[function(require,module,exports){
'use strict';

function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.asset = this.add.sprite(this.width / 2, this.height / 2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(this.asset);
    this.load.spritesheet('background', 'assets/background.png', 300, 600, 19);
    this.load.spritesheet('ennemy', 'assets/oiseau.png', 60, 44, 3);
    // this.load.spritesheet('player', 'assets/avions.png', 304, 120, 9);
    this.load.image('player', 'assets/player.png');
    this.load.spritesheet('playerR', 'assets/avionsr.png', 304, 120, 9);
    this.load.spritesheet('playerB', 'assets/avionsb.png', 304, 120, 9);
    this.load.image('star', 'assets/etoile.png');
    this.load.image('menubackground', 'assets/accueilimg.png');
    this.load.image('gameover', 'assets/gameover.png');
    this.load.image('menucontainer', 'assets/menucontainer.png');
    this.load.image('logo', 'assets/logo.png');
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if (!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};
module.exports = Preload;

},{}]},{},[1])