<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: huyu12
 * @Date: 2022-01-11 11:56:40
 * @LastEditors: huyu12
 * @LastEditTime: 2022-03-24 16:16:21
-->
<template>
  <div class="keyboard-wrapper">
    <template v-if="boardType === 'ChineseChar'">
      <li
        class="block"
        v-for="(item,index) in before"
        :key="'ChineseChar'+item"
        :class="{'down':index === tapIndex}"
        :style="{
          'background-color':index === tapIndex ? activeColor : ''
        }"
        @touchstart="mousedown(index)"
        @touchend="tapIndex = -1 "
        @click.stop="setItem(item)"
      >{{item}}</li>
      <li
        class="block back"
        :class="{'backdown':tapBack}"
        @touchstart="tapBack= true"
        @touchend="tapBack =false "
        @click.stop="deleteItem"
      >
        <img src="../../assets/delete.svg">
      </li>
    </template>
    <template v-if="boardType === 'EndChar_Hide2'">
      <li
        class="block"
        v-for="(item,index) in sec"
        :key="'EndChar_Hide2'+item"
        :class="{'down':index === tapIndex && EndChar_Hide2_hide.indexOf(item) === -1,'forbid':EndChar_Hide2_hide.indexOf(item) !== -1}"
        :style="{
          'background-color':index === tapIndex && EndChar_Hide2_hide.indexOf(item) === -1 ? activeColor : ''
        }"
        @touchstart="mousedown(index)"
        @touchend="tapIndex = -1 "
        @click.stop="setItem(item)"
      >{{item}}</li>
      <li
        class="block back"
        :class="{'backdown':tapBack}"
        @touchstart="tapBack= true"
        @touchend="tapBack =false "
        @click.stop="deleteItem"
      >
        <img src="../../assets/delete.svg">
      </li>

    </template>
    <template v-if="boardType === 'EndChar_More'">
      <li
        class="block"
        v-for="(item,index) in seven"
        :key="'EndChar_Hide2'+item"
        :class="{'down':index === tapIndex}"
        :style="{
          'background-color':index === tapIndex ? activeColor : ''
        }"
        @touchstart="mousedown(index)"
        @touchend="tapIndex = -1 "
        @click.stop="setItem(item)"
      >{{item}}</li>
      <li
        class="block back"
        :class="{'backdown':tapBack}"
        @touchstart="tapBack= true"
        @touchend="tapBack =false "
        @click.stop="deleteItem"
      >
        <img src="../../assets/delete.svg">
      </li>
    </template>
    <template v-if="boardType === 'Char_Hide2'">
      <li
        class="block"
        v-for="(item,index) in sec"
        :key="'EndChar_Hide2'+item"
        :class="{'down':index === tapIndex && Char_Hide2_hide.indexOf(item) === -1,'forbid':Char_Hide2_hide.indexOf(item) !== -1}"
        :style="{
          'background-color':(index === tapIndex && Char_Hide2_hide.indexOf(item) === -1) ? activeColor : ''
        }"
        @touchstart="mousedown(index)"
        @touchend="tapIndex = -1 "
        @click.stop="setItem(item)"
      >{{item}}</li>
      <li
        class="block back"
        :class="{'backdown':tapBack}"
        @touchstart="tapBack= true"
        @touchend="tapBack =false "
        @click.stop="deleteItem"
      >
        <img src="../../assets/delete.svg">
      </li>
    </template>
    <template v-if="boardType === 'Char_Hide1'">
      <li
        class="block"
        v-for="(item,index) in sec"
        :key="'EndChar_Hide2'+item"
        :class="{'down':index === tapIndex && Char_Hide1_hide.indexOf(item) === -1,'forbid':Char_Hide1_hide.indexOf(item) !== -1}"
        :style="{
          'background-color':index === tapIndex && Char_Hide1_hide.indexOf(item) === -1 ? activeColor: ''
        }"
        @touchstart="mousedown(index)"
        @touchend="tapIndex = -1 "
        @click.stop="setItem(item)"
      >{{item}}</li>
      <li
        class="block back"
        :class="{'backdown':tapBack}"
        @touchstart="tapBack= true"
        @touchend="tapBack =false "
        @click.stop="deleteItem"
      >
        <img src="../../assets/delete.svg">
      </li>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    boardType: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
    }
  },
  data () {
    return {
      before: ['京', '津', '晋', '冀', '蒙', '辽', '黑', '吉', '沪', '苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂', '琼', '川', '贵', '云', '藏', '渝', '陕', '甘', '青', '新', '使', '港', '澳', '台', '学', '虚', ' W'],
      sec: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '领', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '警', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '港', '澳'],
      seven: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'P', '学', '领', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '警', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '港', '澳'],
      charts: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      tapIndex: -1,
      tapBack: false,
      EndChar_Hide2_hide: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '领', '警', '港', '澳'],
      Char_Hide2_hide: ['O', '领', '警', '港', '澳'],
      Char_Hide1_hide: ['领', '警', '港', '澳']
    }
  },
  methods: {
    mousedown (index) {
      this.tapIndex = index
    },
    setItem (item) {
      if (this.boardType === 'EndChar_Hide2' && this.EndChar_Hide2_hide.indexOf(item) === -1) {
        this.$emit('getItem', item)
      } else if (this.boardType === 'Char_Hide2' && this.Char_Hide2_hide.indexOf(item) === -1) {
        this.$emit('getItem', item)
      } else if (this.boardType === 'Char_Hide1' && this.Char_Hide1_hide.indexOf(item) === -1) {
        this.$emit('getItem', item)
      } else if (this.boardType === 'ChineseChar' || this.boardType === 'EndChar_More') {
        this.$emit('getItem', item)
      }
    },
    deleteItem () {
      this.$emit('deleteItem')
    }
  }
}
</script>
<style lang="less" scoped>
* {
  user-select: none;
}

li {
  list-style: none;
  padding: 0;
}
.keyboard-wrapper {
  width: 100%;
  box-sizing: border-box;
  height: fit-content;
  padding: 1vw 2vw;
  padding-bottom: 6vw;
  box-sizing: border-box;
  background-color: rgb(235, 235, 235);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.block {
  width: 7.5vw;
  height: 10vw;
  background-color: white;
  border-radius: 1vw;
  margin: 1vw 0.6vw;
  line-height: 9vw;
  text-align: center;
  user-select: none;
  font-size: 3rem;
  font-weight: 500;
}
.back {
  width: 10vw;
  height: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  img {
    width: 6vw;
  }
}

.down {
  background-color: rgba(92, 184, 122);
  color: white;
}
.backdown {
  border: 1px solid #ccc;
}
.forbid {
  color: rgb(235, 235, 235);
}
</style>