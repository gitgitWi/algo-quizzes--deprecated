/**
 * lv2. 오픈채팅방
 *
 * 2019 KAKAO BLIND RECRUITMENT
 *
 * https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
 */

const actions = {
	Enter: "님이 들어왔습니다.",
	Leave: "님이 나갔습니다."
};

function solution(record) {
	const users = {};
	const parsed = {};
	record.forEach((re, idx) => {
		const [action, uid, nickname] = re.split(" ");
		if (nickname) users[uid] = nickname;
		if (action !== "Change") parsed[idx] = { uid, action };
	});

	const logs = Object.values(parsed).map(
		({ uid, action }) => `${users[uid]}${actions[action]}`
	);
	return logs;
}

module.exports = function solve() {
	const qq = [
		[
			"Enter uid1234 Muzi",
			"Enter uid4567 Prodo",
			"Leave uid1234",
			"Enter uid1234 Prodo",
			"Change uid4567 Ryan"
		],
		["Enter uid1234 Muzi", "Change uid1234 Ryan", "Leave uid1234"]
	];

	qq.forEach((ele) => console.log(solution(ele)));
};
