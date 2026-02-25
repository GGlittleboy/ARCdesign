javascript: $('<style>
.box_2{  /* 注意：你截图里是.box_2，这里按截图统一，避免命名混淆 */
  margin: 0;
  width: 100%;
  height: 100vh;  /* 修正：100vh 不是 100vh;（原截图少v，且统一小写更规范） */
  font-family: "Exo", sans-serif;
  color: #fff;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);  /* 修正截图里的笔误：EE7752、E73C7E */
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;  /* 补全分号，CSS语法必须 */
}
@keyframes gradientBG {
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
  }
  100% {
      background-position: 0% 50%;
  }
}
.box_2{
  width: 100%;
  position: absolute;
  top: 35%;
  text-align: center;
}
</style>').appendTo('head');