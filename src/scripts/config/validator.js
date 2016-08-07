class Validator {
	constructor() {
		this.rules = {
			isNonEmpty: (val, errMsg) => {
				errMsg = errMsg || '不能为空'
				return (/^\s*$/.test(val) || val === '') ? errMsg : ''
			},
			isToken: (val, errMsg) => {
				errMsg = errMsg || 'token格式错误'
				return /^(\w+\-)+\w+$/.test(val) ? '' : errMsg
			}
		}
	}
	
	check(val, opts) {
		let ret = ''
		val = val.replace(/^\s+|\s+$/g, '')

		for (let opt of opts) {
			if (!this.rules[opt.rule]) {
				console.log('没有该验证规则')
				break
			}

			ret = this.rules[opt.rule](val, opt.errMsg)
			if(ret) break
		}

		return ret
	}

	add(type, fn) {
		this.rules[type] = fn
	}
}

export default new Validator()