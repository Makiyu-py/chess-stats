// chess.com interface
// https://www.chess.com/news/view/published-data-api

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

interface tacticsOrlessons {
	highest: baseGame;
	lowest: baseGame;
}

interface gameModeObj {
	last: lastGame;
	best: bestGame;
	record: {
		win?: number;
		loss?: number;
		draw?: number;
		time_per_move?: number;
		timeout_percent?: number;
	};
	tournament?: {
		count?: number;
		withdraw?: number;
		points?: number;
		highest_finish?: number;
	};
}

export interface chessComStatsObj {
	chess_daily?: gameModeObj;
	chess960_daily?: gameModeObj;
	chess_bullet?: gameModeObj;
	chess_blitz?: gameModeObj;
	chess_rapid?: gameModeObj;
	tactics?: tacticsOrlessons;
	lessons?: tacticsOrlessons;
	puzzle_rush?: {
		daily?: puzzleRushInner;
		best: puzzleRushInner;
	};
}

// lichess interface
// https://lichess.org/api#operation/apiUser

interface basePerf {
	games: number;
	rating: number;
	rd?: number;
	prog?: number;
	prov?: boolean;
}

export interface lichessProfileInterface {
	id: string;
	username: string;
	online: boolean;
	perfs: {
		chess960?: basePerf;
		atomic?: basePerf;
		racingKings?: basePerf;
		ultraBullet?: basePerf;
		blitz?: basePerf;
		kingOfTheHill: basePerf;
		bullet?: basePerf;
		correspondence?: basePerf;
		horde?: basePerf;
		puzzle?: basePerf;
		classical?: basePerf;
		rapid?: basePerf;
		storm?: {
			runs: number;
			score: number;
		};
	};
	createdAt: number;
	disabled: boolean;
	tosViolation: boolean;
	profile: {
		country?: string;
		location?: string;
		bio?: string;
		firstName?: string;
		lastName?: string;
		fideRating?: string;
		uscfRating?: number;
		ecfRating?: number;
		rcfRating?: number;
		cfcRating?: number;
		dsbRating?: number;
		links?: string;
	};
	seenAt?: number;
	patron: boolean;
	playTime?: {
		total?: number;
		tv?: number;
	};
	language?: string;
	title?: string;
	url: string;
	playing?: string;
	nbFollowing?: number;
	nbFollowers?: number;
	count?: {
		all?: number;
		rated?: number;
		ai?: number;
		draw?: number;
		drawH?: number;
		loss?: number;
		win?: number;
		winH?: number;
		bookmark?: number;
		playing?: number;
		import?: number;
		me?: number;
	};
	streaming: boolean;
	followable: boolean;
	following: boolean;
	blocking: boolean;
	followsYou: boolean;
}

export type WebChess = 'chess.com' | 'lichess';
export enum WebChessEnum {
	chesscom,
	lichess,
}
export interface fetchStoreRes<Type> {
	data: Type;
	isStale: boolean;
}

export interface fetchparams {
	url: string;
	options?: RequestInit;
}
