<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: huyu12
 * @Date: 2022-01-11 10:31:26
 * @LastEditors: huyu12
 * @LastEditTime: 2022-03-24 16:20:18
-->
<template>
  <div style="plate-wrapper">
    <div
      class="block-wrapper"
      id="platenum-input"
    >
      <div
        class="normal-block"
        :class="{'block-choosed':tapIndex === 0}"
        :style="{
          'border-color':tapIndex === 0 ? activeColor : borderColor,
          'background-color':tapIndex === 0 ? activeColor : backgroundColor,
          'font-size':fontSize + 'px',
          'height':blockSize + 'px',
          'width':blockSize + 'px'
        }"
        @click.stop="tapBlock(0)"
      >{{plateArr[0]}}</div>
      <div
        class="normal-block"
        :class="{'block-choosed':tapIndex === 1}"
        :style="{
          'border-color':tapIndex === 1 ? activeColor : borderColor,
          'background-color':tapIndex === 1 ? activeColor : backgroundColor,
          'font-size':fontSize + 'px',
          'height':blockSize + 'px',
          'width':blockSize + 'px'
        }"
        @click.stop="tapBlock(1)"
      >{{plateArr[1]}}</div>
      <span>·</span>
      <div
        class="normal-block"
        :class="{'block-choosed':tapIndex === 2}"
        :style="{
          'border-color':tapIndex === 2 ? activeColor : borderColor,
          'background-color':tapIndex === 2 ? activeColor : backgroundColor,
          'font-size':fontSize + 'px',
          'height':blockSize + 'px',
          'width':blockSize + 'px'
        }"
        @click.stop="tapBlock(2)"
      >{{plateArr[2]}}</div>
      <div
        class="normal-block"
        :class="{'block-choosed':tapIndex === 3}"
        :style="{
          'border-color':tapIndex === 3 ? activeColor : borderColor,
          'background-color':tapIndex === 3 ? activeColor : backgroundColor,
          'font-size':fontSize + 'px',
          'height':blockSize + 'px',
          'width':blockSize + 'px'
        }"
        @click.stop="tapBlock(3)"
      >{{plateArr[3]}}</div>
      <div
        class="normal-block"
        :class="{'block-choosed':tapIndex === 4}"
        :style="{
          'border-color':tapIndex === 4 ? activeColor : borderColor,
          'background-color':tapIndex === 4 ? activeColor : backgroundColor,
          'font-size':fontSize + 'px',
          'height':blockSize + 'px',
          'width':blockSize + 'px'
        }"
        @click.stop="tapBlock(4)"
      >{{plateArr[4]}}</div>
      <div
        class="normal-block"
        :class="{'block-choosed':tapIndex === 5}"
        :style="{
          'border-color':tapIndex === 5 ? activeColor : borderColor,
          'background-color':tapIndex === 5 ? activeColor : backgroundColor,
          'font-size':fontSize + 'px',
          'height':blockSize + 'px',
          'width':blockSize + 'px'
        }"
        @click.stop="tapBlock(5)"
      >{{plateArr[5]}}</div>
      <div
        class="normal-block"
        :class="{'block-choosed':tapIndex === 6}"
        :style="{
          'border-color':tapIndex === 6 ? activeColor : borderColor,
          'background-color':tapIndex === 6 ? activeColor : backgroundColor,
          'font-size':fontSize + 'px',
          'height':blockSize + 'px',
          'width':blockSize + 'px'
        }"
        @click.stop="tapBlock(6)"
      >{{plateArr[6]}}</div>
      <div
        class="normal-block dash"
        :class="{'block-choosed':tapIndex === 7,'dash-item':plateArr[7]}"
        :style="{
          'border-color':tapIndex === 7 ? activeColor : borderColor,
          'background-color':tapIndex === 7 ? activeColor : backgroundColor,
          'font-size':plateArr[7] ? fontSize + 'px' : '',
          'height':blockSize + 'px',
          'width':blockSize + 'px'
        }"
        @click.stop="tapBlock(7)"
      >{{plateArr[7] || '新能源'}}</div>
    </div>
    <div
      v-show="tapIndex !== -1"
      class="keyboard"
    >
      <PlateKeyboard
        :boardType="boardType"
        :activeColor="activeColor"
        @getItem="getItem"
        @deleteItem="deleteItem"
      ></PlateKeyboard>
    </div>
  </div>
</template>
<script>
import PlateKeyboard from './PlateKeyboard.vue'

export default {
  name: 'h5-plate-input',
  components: { PlateKeyboard },
  props: {
    'borderColor': { //边框颜色
      type: String,
      // default: '#4747474d',
      validator (v) {
        if (v.match(/^#([A-Fa-f0-9]{6}|[a-fA-F0-9]{3})/g)) {
          return true
        } else {
          console.warn('border-color 请传入十六进制的颜色表示!')
          return false
        }
      }
    },
    'backgroundColor': {//背景颜色
      type: String,
      validator (v) {
        if (v.match(/^#([A-Fa-f0-9]{6}|[a-fA-F0-9]{3})/g)) {
          return true
        } else {
          console.warn('background-color 请传入十六进制的颜色表示!')
          return false
        }
      }
    },
    'activeColor': {//选中背景颜色
      type: String,
      // default: '#5cb87a',
      validator (v) {
        if (v.match(/^#([A-Fa-f0-9]{6}|[a-fA-F0-9]{3})/g)) {
          return true
        } else {
          console.warn('active-color 请传入十六进制的颜色表示!')
          return false
        }
      }
    },
    'fontSize': {//输入框文字大小
      type: String || Number,
      // default: '18',
    },
    'blockSize': {//输入框大小
      type: String || Number,
      // default: '18',
    }
  },
  data () {
    return {
      tapIndex: -1,
      boardType: '',
      plateArr: [],
    }
  },
  created () {
    document.onclick = (e) => {
      if (e.target.id !== 'platenum-input') {
        this.tapIndex = -1
      }
    }
  },
  watch: {
    tapIndex (val) {
      if (val === 0) {
        this.boardType = 'ChineseChar'
      } else if (val === 1) {
        this.boardType = 'EndChar_Hide2'
      } else if (val === 6 || val === 7) {
        this.boardType = 'EndChar_More'
      } else if (val === 5) {
        this.boardType = 'Char_Hide2'
      } else if (val !== -1) {
        this.boardType = 'Char_Hide1'
      }
    }
  },
  methods: {
    tapBlock (index) {
      if (index === this.tapIndex) {
        this.tapIndex = -1
      } else {
        this.tapIndex = index
      }
    },
    getItem (data) {
      this.plateArr[this.tapIndex] = data
      this.$emit('onChange', this.plateArr.join(''));
      if (this.tapIndex !== 7) {
        this.tapIndex += 1
      } else {
        this.tapIndex = -1
      }
    },
    deleteItem () {
      this.plateArr[this.tapIndex] = ''
      this.$emit('onChange', this.plateArr.join(''));
      if (this.tapIndex !== 0) {
        this.tapIndex -= 1
      } else {
        this.tapIndex = -1
      }
    }
  }
}
</script>
<style lang="less" scoped>
* {
  user-select: none;
}
.plate-wrapper {
  width: 100%;
}
.block-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin: 0 1vw;
    font-weight: 700;
    color: #aaa;
  }
}
.normal-block {
  width: 9vw;
  height: 9vw;
  border: 1px solid rgb(71, 71, 71);
  border-radius: 1vw;
  margin: 0 0.6vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-sizing: border-box;
}
.dash {
  border: 2px dashed rgb(150, 150, 150);
  font-size: 1.4rem;
  line-height: 9vw;
  text-align: center;
}

.block-choosed {
  background-color: rgba(92, 184, 122);
  color: white;
  border-color: #5cb87a;
  border: 1px solid #4747474d;
}

.keyboard {
  width: 100%;
  height: fit-content;
  position: absolute;
  bottom: 0;
}
.dash-item {
  font-size: 2.5rem;
}
</style>