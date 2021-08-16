// chess.com interface
// https://www.chess.com/news/view/published-data-api

interface recordObj {
  win?: number;
  loss?: number;
  draw?: number;
  time_per_move?: number;
  timeout_percent?: number;
}

interface tourneyObj {
  count?: number;
  withdraw?: number;
  points?: number;
  highest_finish?: number;
}

interface baseGame {
  date: number;
  rating: number;
}

interface lastGame extends baseGame {
  rd?: number;
}

interface bestGame extends baseGame {
  game: string;
}

interface puzzleRushInner {
  total_attempts: number;
  score: number;
}

interface puzzleRushObj {
  daily?: puzzleRushInner;
  best: puzzleRushInner;
}

interface tacticsOrlessons {
  highest: baseGame;
  lowest: baseGame;
}

interface gameModeObj {
  last: lastGame;
  best: bestGame;
  record: recordObj;
  tournament?: tourneyObj;
}

export interface chessComStatsObj {
  chess_daily?: gameModeObj;
  chess960_daily?: gameModeObj;
  chess_bullet?: gameModeObj;
  chess_blitz?: gameModeObj;
  chess_rapid?: gameModeObj;
  tactics?: tacticsOrlessons;
  lessons?: tacticsOrlessons;
  puzzle_rush?: puzzleRushObj;
}

export interface fetchparams {
  url: string;
  options?: RequestInit;
}

export type WebChess = "chess.com" | "lichess";
export type ZeroOrOne = 0 | 1;
