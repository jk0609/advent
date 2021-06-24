
const dayThreeInput = [
  '.#..#.....#....##..............',
  '...#.#...#...#.#..........#....',
  '#...###...#.#.....#.##.#.#...#.',
  '#.....#.#...##....#...#...#....',
  '##.......##.#.....#........##.#',
  '#..#....#......#..#......#...#.',
  '#..#......#.......#............',
  '##...#.#..#...#........#....##.',
  '#.#.#...#...#..#........#....#.',
  '.......#...........##......#...',
  '##.##.##......#..#............#',
  '..#.###..#..............#......',
  '.##..#.....#......#.#..........',
  '........#.........#....#....###',
  '#..........#........#.#.#......',
  '...##.....#..####.###..#.##....',
  '....#...###............#..#....',
  '...#.#...#.#...#..#.#........##',
  '.....#...#.............#..#....',
  '....#.#.#.##.....##.##....#....',
  '..#....#............#.##.##..#.',
  '.#..#..#................#...###',
  '#..###.#..##..#............#...',
  '.......#.#....#.##.#.##........',
  '##...###.#....#...........###.#',
  '...#.#....#..####.........#....',
  '....##........#.#.#.###........',
  '#...#..#.....#....##..#.##...#.',
  '##....................##..#....',
  '.#....##...........##...##...#.',
  '.#.#..#.........#.........#.#.#',
  '#.#..#.....#.#..#..#..#.#......',
  '...#.............#......#....##',
  '....#.#.......#....#...#.##...#',
  '#.#.#..###..........#...#......',
  '......#.....#..#..#.......##..#',
  '.#......#......#.....#...#.....',
  '......#..#......#.#............',
  '..#............#..#....#.#.....',
  '.....#..##.......#...##.###.#.#',
  '.....#........##....#.#...##..#',
  '..........##.#..#.#...#..#....#',
  '#.#.#.#.##...................#.',
  '.....#....##.....#..#...#..#...',
  '...#....#.............#....#.#.',
  '.........#.##..##..............',
  '#...#.#....#..#...#.......#....',
  '.#...#......#.##.#...#.#..###..',
  '..#.#.#......#..#...##..##.##..',
  '.........#.....#......##....##.',
  '...###.......#..#........#.....',
  '...#....#...#.#.#......##....#.',
  '.#.....#......#...##.##..#.....',
  '..#.##...#....####...##........',
  '..#.#.###....#..##.......##....',
  '.....#....##...#......#.......#',
  '.#....#......#..............#..',
  '.......#.#......#..#....#.#.#..',
  '.......#.#.........###....#....',
  '.#...#.......#.#..#..####....#.',
  '..#...#.#......#..#.##.###..#..',
  '..##.........#............#.#.#',
  '#.........##.##.........#.###..',
  '...#....#.......#..#..##.......',
  '.#....##........##.......#..#..',
  '...#.....#.#.##.#.#.....##.....',
  '.#.#........#.......#.#..#..#..',
  '.....####..##.##.#.#....#......',
  '..#.##.#.#.#....###..#....#.#..',
  '..##..#.#......##.#..#.........',
  '....#..#.#.##.......#...##.....',
  '....###.....#..###...#....###.#',
  '..#....#.......#......#...##..#',
  '..#..##......#....#.###..#..##.',
  '..#..#...............#.#.#.....',
  '...##...#.#..#.#...#......#....',
  '#....#...#.#.#.#.#....#....#...',
  '....##...#....#.....##..#.....#',
  '......##.....#...##..#.......#.',
  '......###......#....#.##..#....',
  '.....#........#........#...#..#',
  '.#..##.....##....#.#......#.#..',
  '#..#.#.....#........#......#.#.',
  '.#..#.##.....#####.#....#.#....',
  '....##........#..........#.#...',
  '.......#.....#.......#...#.#...',
  '.#....#...##.###....#.#......#.',
  '#...#...........##.#...........',
  '#...##.......#..#........#.#..#',
  '.....#..##..###....#.#.#....#..',
  '..#..#.....#............#.#....',
  '............#......#.....#.....',
  '.#..#.....##.........#....###.#',
  '#.........#....#....#.#..#...#.',
  '##.#...##....#..#...#.#...#....',
  '....###..##...................#',
  '....##...#......#...#.#...#...#',
  '#....#....###..........#...#..#',
  '.....##.#....###.###....#..###.',
  '#.....#...........#...........#',
  '##..###.##........#..#.#..#.#..',
  '.##...#..#.......#.#....#.....#',
  '......##..#..#.......#.#...##..',
  '......#..#..#.#...###..#.#....#',
  '#.##.#..#......#...##........##',
  '.....#..........##.....#...#...',
  '........#....##......#......#.#',
  '..#..#.#...#.#.#.......#......#',
  '.#....#........#............#..',
  '......##.....#...#.............',
  '#......##..#.......##....##.#..',
  '.....#..#..#...#.......#..#....',
  '...#..##.#..#.#....##.....#..##',
  '......#...#.#...#.#......###.#.',
  '.#.#...#.....#..###.....#......',
  '#..####.#....#.......##...#....',
  '.##.......#.....#.........#....',
  '#......##.#...............#....',
  '.######.#...##...#...#...#..##.',
  '....#...####....##.#..#...##...',
  '.#...................#.#..#..#.',
  '.#.#....##...#...#.#..#.#.#.#..',
  '......#......#........##.#...#.',
  '##..#...#..#.............##.#..',
  '#.............#..........#.#...',
  '...##.....#.............#......',
  '......###.....#................',
  '#.#.#....#..##.#.....#.........',
  '.#.#........#.........#.#.##.#.',
  '......#...##...#.#.....#....#..',
  '#...#.........##.##.#..........',
  '#..............#..#.......##...',
  '#...#......#.#......#...#....#.',
  '...#...#........#.#......#.###.',
  '##.....#...#.#..#..#..#.......#',
  '..#.##..##.........#...##.##...',
  '#....#....#.....#..........#...',
  '#.####..#..###.....#..#..#.....',
  '..#.....#.##.##..####....#.#.#.',
  '...#.#....#...#.......#..#.....',
  '......###...#.#..#..#..........',
  '.........#..#.....#.#.##......#',
  '.......#.#....##.....##.#..#.#.',
  '.#..#.#..#......##.###...##..#.',
  '....###...........#.....#....#.',
  '.#.##.....#..#.....#......##...',
  '#..##....#..........#.##.##..#.',
  '.###.#.#..#.#.....#..##....#.#.',
  '..##.#....#.....##..#..........',
  '##........#...#..#........###.#',
  '#...#...........##.......#.#...',
  '...###.....##.#....#...#...#...',
  '......#....#.#.......###....#..',
  '...#...#.......##.......###.#..',
  '..............#.#..........##..',
  '#.#....###..#..#.........#.....',
  '.###.#.......#.....#....#.#....',
  '.....###...#.#..#.#.......#....',
  '.........#.##.#......#.#..#....',
  '.......#....#....#.#....#..##.#',
  '...............#...##.#..#.#..#',
  '.....##........#..##...........',
  '.##.#..#....#..#.#...#.........',
  '.#.#..##.#..#......#....#.#...#',
  '##....#.......##...........#...',
  '..#...#.............#.#....#..#',
  '..#......#..#.....#...##.....#.',
  '....##...#.#...##...#..##......',
  '.....#..#..........#...........',
  '..##....#..#.#....#..#........#',
  '.###....#.....#.#....#..##.....',
  '#.......##.......#..#..#....#.#',
  '.##..#...........#..##..##..#..',
  '.#.................#...#....#..',
  '.######.......#............##..',
  '.#.........#......##.#.#.#.#.#.',
  '.#.......#...#...#....###....#.',
  '....#...##.#.#...#.....#.#..#..',
  '.#..#..#...#.....###....#......',
  '...#.##.###........#.....##....',
  '..#....#.#.#..........#..#..#..',
  '......#.....#...#..#..##..#.#..',
  '#.#.......##.......#....#.....#',
  '..#...#..#.#....#.##.##........',
  '..#....#..##..#..##......#.....',
  '#....#..##.....#....###........',
  '##...#......#..###.#.....#.....',
  '#..###....#...#...#...#......##',
  '.....###....#......#..#..#...#.',
  '.##......#.......##...#........',
  '....#.#.....##.....#.....#.....',
  '...##.#.....#..##...#...##.#...',
  '..#...#.#....#....#...##.......',
  '......#....#..#....#.#.........',
  '..........#.#.#...##....#......',
  '...#....................#..#...',
  '...#....###....#..#.....#.....#',
  '..#....#....#..#.#..##.#...#...',
  '..#.##....##.....#.#........#..',
  '#.....###..#.#.#...#..#....#...',
  '........#..#.#..#........##....',
  '.##....#................##.#.##',
  '..##...#.#.#.....##..#....#....',
  '....#..#....#..#........#..##..',
  '...#...##....#....#..##......#.',
  '##........#...#.....#.....#...#',
  '.#......#....##...#.........##.',
  '##........#...#.....#..#...#.#.',
  '...##..#..#.....#..###.#..#....',
  '....#..#..............#.......#',
  '.......#.##...#......#.###.....',
  '#........##..##....#.#.#.......',
  '#.#..##.#.......#..##.....###..',
  '.....##...#..#.....#...........',
  '...#..#..#......#...#.#........',
  '.#....#....#.#.....#.....#....#',
  '...#..#...#..#.##.#......#.#.#.',
  '..##....#..#..#.....#....#....#',
  '...#....#.##.#..#.###......#...',
  '.......#..#.....#.......#..#...',
  '..###.#####..#..##.#.........#.',
  '...#.......##...#.#..#.#......#',
  '....#...#.###..#..........#....',
  '...........#...#..##........#..',
  '.......#...#....#....#.#..#....',
  '.........#..........#...#....##',
  '.##.........##..#.......##.#...',
  '........#......###...##...#.#.#',
  '#.#...##.##...........#...#.#..',
  '.....###...#..##......#..#.....',
  '#.#.....#.#....##..........#..#',
  '#..#.......#.#.........####....',
  '#.#...#.....#........#.....#..#',
  '.....#..#.#.###.....#.#.###....',
  '.###..#......##..#..#..........',
  '#....#.#......#...#.##......#..',
  '..#.........##.#.....#.........',
  '...#....#.....##.#..#..##.#..#.',
  '##.....#.#..#.#....#......#....',
  '....###.#.....#.......#..#.#...',
  '#.....##.....##...........#....',
  '..........#..#......#.##...#...',
  '#...#.###....##....#.###..###..',
  '##........#.#...#..#.........#.',
  '##........##.......#.....###...',
  '.##....###........#..##...#...#',
  '......#..##....##.....#..#.#...',
  '.....#..##..#.......#.......#..',
  '......#....#.......##.#........',
  '.#.####.#..#......#..#.........',
  '.##..#....#...##.#....#....#...',
  '..#..#..#####.........#...#....',
  '....#.....#.#.#.#...#.#......#.',
  '....#...#.#..#.##...#...#......',
  '..#...#...#...#...#..#.#.##..#.',
  '..#......#.#.#.##.##.##..#.....',
  '#..###......#.##...#....#.##.#.',
  '.#.#.......##..##....##...##.#.',
  '.##......##....##.#.......#...#',
  '..#...#...................#....',
  '.#...#.......######.....#.#..##',
  '......#.##.....#.#.............',
  '...........##.#........#..#....',
  '#.............#.#.....#....##..',
  '#...........#...#..###.....#...',
  '....#.......#.#..#..#.#........',
  '......#...##.......#..##....#..',
  '......#.##.##..#........#.#...#',
  '.#..#...##...................#.',
  '.#.............#...#.#.#.#...#.',
  '.........#.....#........#.#....',
  '#..#...#.............##.#.....#',
  '...#.#....#...##............#..',
  '..#...#.##.###.#.....#......##.',
  '...#.#..###...#.#............#.',
  '...#....#........#.#...........',
  '.#......#.#.#.........#.#....#.',
  '....#..#......#.##.....#.#.....',
  '..#..###....#....#.........###.',
  '#..#.#....##.#....#.##..#......',
  '#..#.....#.#.....##..#.##......',
  '......#...#.#.............#..#.',
  '#.#....#.#..#...#......#.#.....',
  '..#.........#.#....#...#.......',
  '.#..#.#...#....#...#......#...#',
  '.......#........#.#..#..#...#..',
  '..##.#......#..##.##.#..#..#...',
  '.##...#....##.....#.....#...##.',
  '#.....##.#....#.#......##..#...',
  '.......#.#..#...#.......#.#...#',
  '..#...#.......#...#..##........',
  '#....##..#...#..#.#......#..#.#',
  '##.#....#....#....#...#..#.##..',
  '###........#.#..#..#......#....',
  '.#......#.....#....#.#..#...#..',
  '.#.....#.....#...##.......#..##',
  '#..##.#..#..........#..........',
  '...#.##.........#.#.##.#.......',
  '.#..#...............#...#.#.#..',
  '.....#.#.....#...####..#.....#.',
  '.#....#.##..##...#...##.#...#.#',
  '....#......##...#.#.#.....#.##.',
  '#...#..#.#...#.#.....##...#....',
  '..#..#....##..###......#..#....',
  '.........#......##.....##....#.',
  '.......#....#...#........###...',
  '.....#..#..#...#...#......#....',
  '..#..#...#.....#.....###..#.###',
  '............#.#..#..#....#.....',
  '...#..#...###.......#.......#..',
  '#.........#........#.....##....',
  '.#.#........#.....#........###.',
  '....#.##.#...#.#.#.....#....#..',
  '.##...#..#.......#.#...........',
  '##...#.##...#...........#.....#',
  '##....#.#.....##..#.......#....',
  '##....#...#....#..#.......####.',
  '......#...#..#.....#.#....#...#',
  '.......#.....#..###............',
  '#.#.#..#.....#.............#..#',
  '.#..#.....##.....#...#.......##',
  '..#.##........##...........#.#.',
  '....##.#..###.#.........#...##.',
];

export const slopes = [
  [1,1],
  [3,1],
  [5,1],
  [7,1],
  [1,2],
]

export default dayThreeInput;