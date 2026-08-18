const WORDS = [
  'AFTER', 'AGAIN', 'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT',
  'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIKE', 'ALIVE', 'ALLOW', 'ALONE',
  'ALONG', 'ALTER', 'ANGEL', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE', 'APPLY', 'ARENA',
  'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AVOID', 'AWARD', 'AWARE', 'BADLY', 'BAKER',
  'BASES', 'BASIC', 'BEACH', 'BEGAN', 'BEING', 'BELOW', 'BENCH', 'BILLY', 'BIRTH', 'BLACK',
  'BLADE', 'BLAME', 'BLAND', 'BLANK', 'BLAST', 'BLAZE', 'BLEED', 'BLEND', 'BLESS', 'BLIND',
  'BLOCK', 'BLOOD', 'BLOOM', 'BOARD', 'BONUS', 'BOOST', 'BOUND', 'BRAIN', 'BRAND', 'BRAVE',
  'BREAD', 'BREAK', 'BREED', 'BRICK', 'BRIEF', 'BROAD', 'BROKE', 'BROOK', 'BROWN', 'BRUSH',
  'BUILD', 'BUILT', 'BUNCH', 'BURST', 'BUYER', 'CABIN', 'CANDY', 'CARRY', 'CATCH', 'CAUSE',
  'CEASE', 'CHAIN', 'CHAIR', 'CHAOS', 'CHARM', 'CHART', 'CHASE', 'CHEAP', 'CHECK', 'CHEEK',
  'CHESS', 'CHEST', 'CHIEF', 'CHILD', 'CHILL', 'CHIPS', 'CHOIR', 'CHOSE', 'CIVIL', 'CLAIM',
  'CLASH', 'CLASS', 'CLEAN', 'CLEAR', 'CLERK', 'CLICK', 'CLIFF', 'CLIMB', 'CLING', 'CLOCK',
  'CLONE', 'CLOSE', 'CLOTH', 'CLOUD', 'COACH', 'COAST', 'COLOR', 'COMET', 'COUNT', 'COURT',
  'COVER', 'CRACK', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME', 'CROSS', 'CROWD', 'CROWN',
  'CRUDE', 'CRUSH', 'CRYPT', 'CURVE', 'CYCLE', 'DAILY', 'DANCE', 'DEATH', 'DEBUT', 'DELAY',
  'DELTA', 'DENSE', 'DEPTH', 'DERBY', 'DESERT', 'DIGIT', 'DIMLY', 'DIRTY', 'DOUBT', 'DOUGH',
  'DOZEN', 'DRAFT', 'DRAIN', 'DRAKE', 'DRAMA', 'DRANK', 'DRAWN', 'DREAM', 'DRESS', 'DRIED',
  'DRIFT', 'DRILL', 'DRINK', 'DRIVE', 'DROVE', 'DROWN', 'DRUMS', 'DRUNK', 'DYING', 'EAGER',
  'EAGLE', 'EARLY', 'EARTH', 'EIGHT', 'EITHER', 'ELECT', 'ELITE', 'EMAIL', 'EMPTY', 'ENEMY',
  'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY', 'EXACT', 'EXILE', 'EXTRA',
  'FAINT', 'FAITH', 'FALSE', 'FANCY', 'FATAL', 'FAULT', 'FEAST', 'FENCE', 'FEVER', 'FIBER',
  'FIELD', 'FIFTH', 'FIFTY', 'FIGHT', 'FINAL', 'FLAME', 'FLASH', 'FLEET', 'FLESH', 'FLICK',
  'FLOAT', 'FLOCK', 'FLOOD', 'FLOOR', 'FLOUR', 'FLUID', 'FLUSH', 'FLUTE', 'FOCAL', 'FOCUS',
  'FORCE', 'FORGE', 'FORTH', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH', 'FRONT',
  'FROST', 'FROZE', 'FRUIT', 'FULLY', 'FUNGI', 'GAIN', 'GAMER', 'GAMES', 'GAMMA', 'GAUGE',
  'GHOST', 'GIANT', 'GIVEN', 'GLASS', 'GLEAM', 'GLOBE', 'GLOOM', 'GLORY', 'GLOSS', 'GLOVE',
  'GLYPH', 'GOING', 'GRACE', 'GRADE', 'GRAIN', 'GRAND', 'GRANT', 'GRAPH', 'GRASP', 'GRASS',
  'GRAVE', 'GREAT', 'GREEN', 'GREET', 'GRIEF', 'GRIND', 'GROAN', 'GROOM', 'GROUP', 'GROVE',
  'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'GUILT', 'HABIT', 'HAPPY', 'HARSH', 'HAVEN',
  'HEART', 'HEAVY', 'HEDGE', 'HELLO', 'HENCE', 'HERBS', 'HINGE', 'HOBBY', 'HOMER', 'HONOR',
  'HORSE', 'HOSTS', 'HOTEL', 'HOUSE', 'HUMAN', 'HUMOR', 'HURRY', 'IDEAL', 'IMAGE', 'IMPLY',
  'INDEX', 'INNER', 'INPUT', 'IRONY', 'ISSUE', 'IVORY', 'JEWEL', 'JOINT', 'JOKER', 'JUDGE',
  'JUICE', 'KEBAB', 'KNIFE', 'KNOCK', 'KNOWN', 'LABEL', 'LARGE', 'LASER', 'LATER', 'LAUGH',
  'LAYER', 'LEARN', 'LEASE', 'LEAVE', 'LEGAL', 'LEMON', 'LEVEL', 'LEVER', 'LIGHT', 'LIMIT',
  'LINER', 'LIVER', 'LOCAL', 'LOGIC', 'LOOSE', 'LOVER', 'LOWER', 'LOYAL', 'LUCKY', 'LUNAR',
  'LUNCH', 'MAGIC', 'MAJOR', 'MAKER', 'MANOR', 'MAPLE', 'MARCH', 'MARRY', 'MASKS', 'MATCH',
  'MAYOR', 'MEDIA', 'MERCY', 'MERGE', 'MERIT', 'METAL', 'METER', 'MIGHT', 'MINOR', 'MINUS',
  'MIRTH', 'MIXED', 'MODEL', 'MONEY', 'MONTH', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH',
  'MOVED', 'MOVIE', 'MUSIC', 'NAIVE', 'NAVAL', 'NERVE', 'NEVER', 'NEWLY', 'NIGHT', 'NINTH',
  'NOBLE', 'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'NYMPH', 'OCCUR', 'OCEAN', 'OFFER',
  'OFTEN', 'OLIVE', 'ONSET', 'OPERA', 'ORBIT', 'ORDER', 'OTHER', 'OUGHT', 'OUTER', 'OVERT',
  'OWNER', 'OXIDE', 'OZONE', 'PAINT', 'PANEL', 'PANIC', 'PAPER', 'PARTY', 'PASTA', 'PATCH',
  'PAUSE', 'PEACE', 'PEARL', 'PENAL', 'PENNY', 'PHASE', 'PHONE', 'PHOTO', 'PIANO', 'PIECE',
  'PILOT', 'PITCH', 'PIXEL', 'PLACE', 'PLAIN', 'PLANE', 'PLANT', 'PLATE', 'PLAZA', 'PLEAD',
  'PLUCK', 'PLUMB', 'PLUME', 'PLUMP', 'PLUNGE', 'POINT', 'POLAR', 'POUND', 'POWER', 'PRESS',
  'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE', 'PROBE', 'PROOF', 'PROSE', 'PROUD',
  'PROVE', 'PROXY', 'PSALM', 'PULSE', 'PUNCH', 'PUPIL', 'PURSE', 'QUEEN', 'QUEST', 'QUEUE',
  'QUICK', 'QUIET', 'QUILT', 'QUITE', 'QUOTA', 'QUOTE', 'RADAR', 'RADIO', 'RAISE', 'RALLY',
  'RANCH', 'RANGE', 'RAPID', 'RATIO', 'REACH', 'REACT', 'READY', 'REALM', 'REBEL', 'REIGN',
  'RELAX', 'RENAL', 'RENEW', 'REPLY', 'RIDER', 'RIDGE', 'RIFLE', 'RIGHT', 'RIGID', 'RIVER',
  'ROBIN', 'ROBOT', 'ROCKY', 'ROUGE', 'ROUGH', 'ROUND', 'ROUTE', 'ROVER', 'ROYAL', 'RUGBY',
  'RULER', 'RURAL', 'SAINT', 'SALAD', 'SAUCE', 'SCALE', 'SCARE', 'SCENE', 'SCENT', 'SCOPE',
  'SCORE', 'SCOUT', 'SCRAP', 'SEIZE', 'SENSE', 'SERVE', 'SEVEN', 'SHADE', 'SHAFT', 'SHAKE',
  'SHALL', 'SHAME', 'SHAPE', 'SHARE', 'SHARK', 'SHARP', 'SHAVE', 'SHEEP', 'SHEER', 'SHEET',
  'SHELF', 'SHELL', 'SHIFT', 'SHINE', 'SHIRT', 'SHOCK', 'SHORE', 'SHORT', 'SHOUT', 'SHOVE',
  'SIGHT', 'SIGMA', 'SINCE', 'SIXTH', 'SIXTY', 'SIZED', 'SKATE', 'SKILL', 'SKULL', 'SLAVE',
  'SLEEP', 'SLICE', 'SLIDE', 'SLING', 'SMART', 'SMELL', 'SMILE', 'SMOKE', 'SNAKE', 'SOLAR',
  'SOLID', 'SOLVE', 'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPARK', 'SPEAK', 'SPEED',
  'SPELL', 'SPEND', 'SPICE', 'SPINE', 'SPITE', 'SPLIT', 'SPOKE', 'SPOON', 'SPORT', 'SPRAY',
  'SQUAD', 'SQUAT', 'STAFF', 'STAGE', 'STAKE', 'STALE', 'STALL', 'STAMP', 'STAND', 'STARK',
  'START', 'STATE', 'STAYS', 'STEAK', 'STEAL', 'STEAM', 'STEEL', 'STEEP', 'STEER', 'STERN',
  'STICK', 'STIFF', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE', 'STORM', 'STORY', 'STOVE',
  'STRAW', 'STRAY', 'STRIP', 'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUNNY',
  'SUPER', 'SURGE', 'SWAMP', 'SWEAR', 'SWEEP', 'SWEET', 'SWEPT', 'SWIFT', 'SWING', 'SWIRL',
  'SWORD', 'SWORE', 'SWORN', 'TABLE', 'TASTE', 'TEACH', 'TEETH', 'THANK', 'THEME', 'THERE',
  'THICK', 'THIEF', 'THING', 'THINK', 'THIRD', 'THORN', 'THOSE', 'THREE', 'THREW', 'THROW',
  'THUMB', 'TIGER', 'TIGHT', 'TIMER', 'TITLE', 'TODAY', 'TOKEN', 'TOPIC', 'TORCH', 'TOTAL',
  'TOUCH', 'TOUGH', 'TOWER', 'TOXIC', 'TRACE', 'TRACK', 'TRADE', 'TRAIL', 'TRAIN', 'TRAIT',
  'TRASH', 'TREAT', 'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TROOP', 'TRUCK',
  'TRULY', 'TRUMP', 'TRUNK', 'TRUST', 'TRUTH', 'TUMOR', 'TWICE', 'TWIST', 'ULTRA', 'UNCLE',
  'UNDER', 'UNION', 'UNITE', 'UNITY', 'UNTIL', 'UPPER', 'UPSET', 'URBAN', 'USAGE', 'USUAL',
  'VALID', 'VALUE', 'VALVE', 'VAULT', 'VERSE', 'VIDEO', 'VIGOR', 'VINYL', 'VIOLA', 'VIRAL',
  'VIRUS', 'VISIT', 'VITAL', 'VIVID', 'VOCAL', 'VODKA', 'VOICE', 'VOTER', 'WAGON', 'WASTE',
  'WATCH', 'WATER', 'WEARY', 'WEAVE', 'WHEAT', 'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE',
  'WHOLE', 'WHOSE', 'WIDEN', 'WIDTH', 'WITCH', 'WOMAN', 'WORLD', 'WORRY', 'WORSE', 'WORST',
  'WORTH', 'WOULD', 'WOUND', 'WRATH', 'WRITE', 'WRONG', 'WROTE', 'YACHT', 'YIELD', 'YOUNG',
  'YOUTH', 'ZEBRA', 'ZONES'
  
].filter((w) => w.length === 5);
 
let solution = '';
let guesses = [];
let currentGuess = '';
let gameOver = false;
 
const BOARD=document.getElementById('board');
const MESSAGE= document.getElementById('message');
const KEYBOARD= document.getElementById('keyboard');
const NEW_GAME_BTN = document.getElementById('newGameBtn');
const GIVE_UP_BTN = document.getElementById('giveUpBtn');




function buildBoard(){
  BOARD.innerHTML = '';
  for ( let r=0; r<6; r++){
    const row = document.createElement('div');
    row.className = 'row';
    row.dataset.row = r;
    
    for (let c=0; c<5; c++){
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.dataset.col = c;
      row.appendChild('tile');
      
    }
    BOARD.appendChild(row);
  }
}

function buildKeyboard(){
  const row = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Enter','Z','X','C','V','B','N','M', 'Backspace'],
  ];

  KEYBOARD.innerHTML = '';
  rows.forEach((rowKeys)=> {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'kb-row';
    rowKeys.forEach((key) => {
      const btn= document.createElement('button');
      btn.className = 'key';
      if (key === 'Enter' || key === 'Backspace'){
        btn.classList.add('wide');
        btn.textContent= key=== 'Backspace'? '⌫' : key;
      } else{
        btn.textContent = key;
      }
      btn.dataset.key = key;
      btn.addEventListener('click',() => handleKeyClick(key));
      rowDiv.appendChild(btn);
    });
    KEYBOARD.appendChild(rowDiv);
  });
}
function getColors(guess){
  const colors = Array(5).fill('absent');
  const solutionChars = solution.split('');
  const guessChars = guess.split('');
  const matched = Array(5).fill(false);

  for( let i=0; i<5; i++){
    if (guessChars[i] === solutionChars[i]){
      colors[i] = 'correct';
      matched[i] = true;

    }
  }

  for (let i=0; i<5; i++){
    if (colors[i] === 'correct') continue;
    for (let j=0; j<5; j++){
      if( !matched[j] && guessChars[i] === solutionChars[j]){
        colors[i]='present';
        matched[j]= true;
        break;

      }
    }
  }
  return colors;
}

function showMessage( text, type=''){
  MESSAGE.textContent = 'text';
  MESSAGE.className = type;
}

function updateBoard(){
  guesses.forEach((word, r) => {
    const colors= getColors(word);
    const rowEl = BOARD.querySelector(`.row[data-row="${r}"]`);
    word.split('').forEach((ch,c) => {
      const tile =rowEl.querySelector(`.tile[data-col="${c}"]`);
      tile.textContent = ch;
      tile.classList.add('flip',colors[c]);
    });
  });

  if (!gameOver && guesses.length <6){
    const rowEl = BOARD.querySelector(`.row[data-row="${guesses.length}"]`);
    for (let c=0; c<5; c++){
      const tile = rowEl.querySelector(`.tile[data-col="${c}"]`);
      tile.textContent = currentGuess[c] || '';
    }
  }
}

function updateKeyboard(){
  const rank = { absent:0, present:1, correct:2};
  guesses.forEach((word) =>{
    const colors = getColors(word);
    word.split('').forEach((ch,i) => {
      const keyBtn = KEYBOARD.querySelector(`.key[data-key="${ch}"]`);
      if (!keyBtn) return;
      const current =keyBtn.dataset.state || 'absent';
      if (rank[colors[i]]> rank[current]) {
        keyBtn.dataset.state = colors[i];
        keyBtn.classList.remove('correct','present','absent');
        keyBtn.classList.add(colors[i]);
      }
    });
  });
}

function sumbitGuess(){
  if (gameOver) return;

  if (currentGuess.length < 5){
    showMessage('Not Enough letters','error')
    return;
  }
  if (!WORDS.includes(currentGuess)){
    showMessage('Invalid Entry', 'error');
    return;
  }
  
}