import { reactive, onMounted, onBeforeMount } from "vue";
export default function () {
  let point = reactive({
    x: 0,
    y: 0,
  });

  function savePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
  }

  onMounted(() => {
    //沒必要把window整個綁上事件，若組件消失了事件還在
    window.addEventListener("click", savePoint);
  });
  onBeforeMount(() => {
    //移除事件監聽
    window.removeEventListener("click", savePoint);
  });
  return point;
}
