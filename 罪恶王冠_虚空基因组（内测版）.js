var void_item = {
	void_item1: [268, 272, 283, 276, 267],
	void_item2: [270, 274, 285, 278, 257, 269, 273, 284, 277, 256],
	void_item3: [290, 291, 294, 293, 292, 259],
	void_item4: [271, 275, 286, 279, 258],
	void_item5: [203, 306, 310, 314, 298, 302],
	void_item6: [299, 315, 311, 303, 307, 300, 304, 308, 312, 316, 303, 304],
	void_item7: [301, 305, 309, 317, 313, 305],
	void_item8: [346],
	void_item9: [261],
	void_item10: [359],
	chant1: [9, 10, 11, 12, 13, 14],
	chant2: [15, 16, 17, 18],
	chant3: [17],
	chant4: [9, 10, 11, 15, 16, 17, 18],
	chant5: [0, 1, 3, 4, 5, 6, 8, 17],
	chant6: [0, 1, 3, 4, 5, 17],
	chant7: [0, 1, 2, 3, 4, 5, 7, 17],
	chant8: [23, 24, 17],
	chant9: [19, 20, 21, 22, 17],
	chant10: [15, 16, 17]
};
var xingfj=false;
var jg = false;
var js = 0;
function dip_size(ctx,dips)
{
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)
}
function x_btn_show(str)
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var layout = new android.widget.LinearLayout(ctx);
                                
 btnWindow = new android.widget.Button(ctx);
btnWindow.setText(str);
btnWindow.setOnClickListener(new android.view.View.OnClickListener( {
onClick: function(v){
if(xingfj==false){x_btn_dismiss();xingfj=true;print("开启虚空能力");x_btn_show("关闭");}else
{x_btn_dismiss();xingfj=false;print("关闭虚空能力");x_btn_show("开启");}
}
}));

layout.addView( btnWindow );
btnWindow = new android.widget.PopupWindow(layout, dip_size(ctx,95), dip_size(ctx,95));//按钮位置
btnWindow.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM,15,15)

                        
}
catch(err){print("抱歉,无法显示按钮");}
}
}
)
); 

}
function leaveGame()
{
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
  
   x_btn_dismiss();
  
}}))

}
function x_btn_dismiss()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

ctx.runOnUiThread(
new java.lang.Runnable
(
     { 
       run: function()
                      {
                      btnWindow.dismiss();//关闭按钮
			}
    }
)
                                          );}
function newLevel() {
	x_btn_show("开启");
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var Dialog = new android.app.AlertDialog.Builder(ctx);
				Dialog.setTitle("Js介绍：");
				Dialog.setMessage("此作品由yika工作室制作，名为  <罪恶王冠:虚空基因组>,空手点击生物有可能获得附魔物品");
				Dialog.setPositiveButton("", new android.content.DialogInterface.OnClickListener({
					onClick: function(dia, w) {}
				}));
				Dialog.show()
			} catch (err) {
				print(err)
			}
		}
	}))
}
function modTick() {
	if (xingfj)
	{
	if (jg) {
		js++;
		if (js == 100) {
			js = 0;
			jg = false
		}
	}
	}
}
function attackHook(attacker, victim) {
	if (xingfj)
	{
	if (attacker == "-4294967295" && getCarriedItem() == 0) {
		if (jg == false) {
			clientMessage("抽取虚空力量");
			preventDefault();
			var x = random_any(1, 10);
			var s1 = "void_item" + x;
			var s = "chant" + x;
			var i = parseInt(void_item[s1].length * Math.random());
			var level = random_any(1, 6);
			addItemInventory(void_item[s1][i], 1, 0);
			if (x == 3) {
				Player.enchant(Player.getSelectedSlotId(), 17, level)
			} else {
				var c;
				var times = random_any(1, 4);
				switch (times) {
				case 1:
					c = parseInt(void_item[s].length * Math.random());
					Player.enchant(Player.getSelectedSlotId(), void_item[s][c], level);
					break;
				case 2:
					c = parseInt(void_item[s].length * Math.random());
					Player.enchant(Player.getSelectedSlotId(), void_item[s][c], level);
					c = parseInt(void_item[s].length * Math.random());
					Player.enchant(Player.getSelectedSlotId(), void_item[s][c], level);
					break;
				case 3:
					c = parseInt(void_item[s].length * Math.random());
					Player.enchant(Player.getSelectedSlotId(), void_item[s][c], level);
					c = parseInt(void_item[s].length * Math.random());
					Player.enchant(Player.getSelectedSlotId(), void_item[s][c], level);
					c = parseInt(void_item[s].length * Math.random());
					Player.enchant(Player.getSelectedSlotId(), void_item[s][c], level);
					break;
				case 4:
					c = parseInt(void_item[s].length * Math.random());
					Player.enchant(Player.getSelectedSlotId(), void_item[s][c], level);
					c = parseInt(void_item[s].length * Math.random());
					Player.enchant(Player.getSelectedSlotId(), void_item[s][c], level);
					c = parseInt(void_item[s].length * Math.random());
					Player.enchant(Player.getSelectedSlotId(), void_item[s][c], level);
					c = parseInt(void_item[s].length * Math.random());
					Player.enchant(Player.getSelectedSlotId(), void_item[s][c], level);
					break
				}
			}
			jg = true;
			js = 0
		} else {
			clientMessage("虚空能力准备中");
			preventDefault()
		}
	}
	}
}
function random_any(under, over) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * under + 1);
	case 2:
		return parseInt(Math.random() * (over - under + 1) + under);
	default:
		return 0
	}
}