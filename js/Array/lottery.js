/* 
whiteList: 类型字符串数组, 意义是表示从其他系统中计算出来的活跃用户, 如果这批用户参与抽奖, 则必定让人中奖. 长度不超过一万
participant: 类型字符串数组, 意义是表示此次活动中真正参与抽奖的用户, 长度约是10万
函数希望从partcipant返回2万个用户, 表示中奖用户, 优先选取whiteList上的用户, 若不在whiteList上, 对participant剩余的随机选取即可
*/
function lottery(whiteList, participant){
	let set = new Set(whiteList)
	let inwhite = new Set()
	let arr = []
	participant.forEach(t => {
		if (set.has(t)){
			 inwhite.add(t)
		} else {
			arr.push(t)
		}
	})
	let num = target - inwhite.size
	let last = []
	while(num--){
		let index = Math.floor(Math.random() * arr.length)
		last.push(arr.splice(index, 1)[0])
	}
	return [...inwhite, ...last]
}
// let whiteList = ['a','b','c','d']
// let participant = ['a', 'c', 'e','f','g','h','i','j','k','l','n','m','o','p','q']
// let target = 10
let whiteList = Array.from({length: 10000}, (item, index) => '' + index)
let participant = Array.from({length: 100000}, (item, index) => '' + index)
let target = 20000
let persons = lottery(whiteList, participant)
console.log(persons)