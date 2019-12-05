module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'linebreak-style': 0,
    'max-len': 0,
    'no-bitwise': 'off',
    'no-const-assign': 'error',
    'prefer-const': 'off',
    'no-mixed-operators': 'off',
    'no-lonely-if': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-tabs': 0,
    'arrow-parens': 'off',
    'no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
    }],
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'error',
    'func-names': 'off',
    'prefer-template': 'off',
    'space-infix-ops': 'error',
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'no-underscore-dangle': 'off',
    'no-prototype-builtins': 'off',
    // 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
    // @off hasOwnProperty 比较常用
    'no-prototype-builtins': 'off',
    // 禁止使用 continue
    // @off continue 很常用
    'no-continue': 'off',
    // 禁止在计算属性中对属性修改
    // @off 太严格了
    'vue/no-side-effects-in-computed-properties': 'off',
    // @fixable 禁止行尾有空格
    'no-trailing-spaces': 'error',
    // 禁止对函数的参数重新赋值
    'no-param-reassign': 0,
    // 禁止变量申明时用逗号一次申明多个
    'one-var': [
      'error',
      'never'
    ],
    // @fixable 变量申明必须每行一个
    'one-var-declaration-per-line': [
      'error',
      'always'
    ],
    // 禁止使用 ++ 或 --
    // @off 没必要限制
    'no-plusplus': 'off',
    // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    // 变量必须先定义后使用
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],
    // 禁止变量名与上层作用域内的定义过的变量重复
    // @off 很多时候函数的形参和传参是同名的
    'no-shadow': 'off',
    // 禁止出现没必要的转义
    // @off 转义可以使代码更易懂
    'no-useless-escape': 'off',
    // switch 语句必须有 default
    // @off 太严格了
    'default-case': 'off',
    // @fixable 必须使用箭头函数作为回调
    // @off 没必要强制要求
    'prefer-arrow-callback': 'off',
    // 禁止出现没必要的字符串连接
    'no-useless-concat': 0,
    // require 必须在全局作用域下
    // @off 条件加载很常见
    'global-require': 0,
    // @fixable 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
    // @off 箭头函数的返回值，应该允许灵活设置
    'arrow-body-style': 'off',
    // 禁止函数在不同分支返回不同类型的值
    // @off 太严格了
    'consistent-return': 'off',
    // @fixable 对象字面量的键名禁止用引号括起来
    // @off 没必要限制
    'quote-props': 'off',
    // @fixable 必须使用 a = {b} 而不是 a = {b: b}
    // @off 没必要强制要求
    'object-shorthand': 'off',
    // 禁止在循环内的函数中出现循环体条件语句中定义的变量，比如：
    // for (var i = 0; i < 10; i++) {
    //     (function () { return i })();
    // }
    'no-loop-func': 0,
    // 禁止变量申明时用逗号一次申明多个
    'one-var': [
      0,
      'never'
    ],
    // @fixable 变量申明必须每行一个
    'one-var-declaration-per-line': [
      0,
      'always'
    ],
    // 变量名必须是 camelcase 风格的
    // @off 很多 api 或文件名都不是 camelcase
    'camelcase': 0,
    // @fixable 禁止行尾有空格
    'no-trailing-spaces': 'error',
    // 禁止连续赋值，比如 a = b = c = 5
    // @off 没必要限制
    'no-multi-assign': 'off',
    'import/prefer-default-export': 'off',
    // @fixable 禁止出现没必要的 bind
    'no-extra-bind': 'error',
    // 禁止使用指定的对象属性
    // @off 它用于限制某个具体的 api 不能使用
    'no-restricted-properties': 'off',
    // 禁止使用指定的全局变量
    // @off 它用于限制某个具体的变量名不能使用
    'no-restricted-globals': 'off',
    // 必须使用解构
    // @off 没必要强制要求
    'prefer-destructuring': 'off',
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    // @fixable 禁止在 else 内使用 return，必须改为提前结束
    // @off else 中使用 return 可以使代码结构更清晰
    'no-else-return': 'off',
    // @fixable 禁止出现超过三行的连续空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 3,
        maxEOF: 1,
        maxBOF: 1
      }
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
