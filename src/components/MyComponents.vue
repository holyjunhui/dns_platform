<template>
  <el-checkbox-group
    v-model="permissions"
    @change="handleChange"
  >
    <el-checkbox
      v-for="item in permissionList"
      :key="item.value"
      :label="item.value"
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>
<script>
const checkBoxDataList = Object.freeze([
  {
    label: "DDoS",
    value: 2
  },
  {
    label: "可用性",
    value: 4
  },
  {
    label: "漏洞扫描",
    value: 8
  },
  {
    label: "网站挂马",
    value: 16
  },
  {
    label: "漏洞情报",
    value: 32
  },
  {
    label: "网站黑链",
    value: 64
  },
  {
    label: "钓鱼网站",
    value: 128
  },
  {
    label: "安全防护",
    value: 256
  },
  {
    label: "违规内容",
    value: 512
  },
  {
    label: "内容变更",
    value: 1024
  },
  {
    label: "态势感知账号",
    value: 2048
  }
]);
export default {
  name: "MyComponents",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      permissions: this.value || [],
      permissionList: checkBoxDataList
    };
  },
  watch: {
    value: function(val) {
      console.log("watch", val);
      // 重置
      const checkBoxVal = checkBoxDataList.map(d => d.value);
      // eslint-disable-next-line no-bitwise
      const checked = checkBoxVal.filter(d => val & d);
      this.permissions = checked;
    }
  },
  computed: {
    messages() {
      return this.value;
    }
  },
  methods: {
    handleChange(val) {
      console.log("valval", val);
      let checked = 0;
      if (val && val.length > 0) {
        checked = val.reduce((pre, cur) => pre + cur);
      }
      this.$emit("input", checked);
    }
  }
};
</script>