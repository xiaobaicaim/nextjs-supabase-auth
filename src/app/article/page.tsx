import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ArticlePage() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Navigation />

      {/* Article Title - centered */}
      <section style={{ padding: "80px 80px 0", maxWidth: 733, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 64,
              letterSpacing: "-0.02em",
              color: "#000000",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            甜点的艺术：一盘提拉米苏里的意大利
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 24,
              lineHeight: "1.5em",
              color: "rgba(0, 0, 0, 0.75)",
              margin: 0,
            }}
          >
            从威尼斯的小巷到佛罗伦萨的咖啡馆，提拉米苏不仅是一道甜点，更是意大利生活哲学的浓缩。让我们跟随甜点的层次，探寻背后的故事与匠心。
          </p>
        </div>
      </section>

      {/* Hero Image - responsive */}
      <section style={{ padding: "48px 80px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            width: "100%",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <img
            src="/images/hero-image.png"
            alt="丰盛的甜点与料理荟萃"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: 8,
            }}
          />
        </div>
      </section>

      {/* Article Body 1 - centered */}
      <section style={{ padding: "80px 80px 0", maxWidth: 842, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            lineHeight: "1.5em",
            color: "#000000",
            margin: 0,
          }}
        >
          如果说意大利美食是一首宏大的交响乐，那么提拉米苏就是其中最温柔动人的乐章。
          <br />
          <br />
          这道诞生于上世纪六十年代的甜品，短短几十年间便征服了全世界的味蕾。它的名字 &ldquo;Tiramisù&rdquo;
          在意大利语中意为&ldquo;带我走&rdquo;，承载着浪漫与温暖。相传在威尼托大区，人们会在清晨享用提拉米苏，用咖啡与可可的香气唤醒一整天的活力。
          <br />
          <br />
          传统的提拉米苏只需六种原料：马斯卡彭奶酪、鸡蛋、糖、浓缩咖啡、手指饼干与可可粉。然而，越是简单的配方，越考验制作者的功力。奶酪的柔滑度、咖啡的浓度、饼干浸泡的时长——每一个变数都决定着最终的味觉体验。好的提拉米苏应该入口即化，咖啡的微苦与奶油的甜美完美平衡，可可粉的醇厚在舌尖慢慢展开。
        </p>
      </section>

      {/* Two Images - centered */}
      <section
        style={{
          padding: "80px 80px 0",
          display: "flex",
          gap: 32,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: 624,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <img
            src="/images/dish-1.png"
            alt="精致前菜 - 香煎带子配柑橘酱汁"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "624 / 436",
              objectFit: "cover",
              display: "block",
              borderRadius: 8,
            }}
          />
        </div>
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: 624,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <img
            src="/images/card-food-2.png"
            alt="法式焦糖布蕾 - 金黄酥脆的焦糖表面"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "624 / 436",
              objectFit: "cover",
              display: "block",
              borderRadius: 8,
            }}
          />
        </div>
      </section>

      {/* Article Body 2 - centered */}
      <section style={{ padding: "80px 80px 0", maxWidth: 842, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            lineHeight: "1.5em",
            color: "#000000",
            margin: 0,
          }}
        >
          在意大利，每家餐厅、每个家庭都有自己的提拉米苏秘方。有人坚持使用生蛋黄以获得更浓郁的口感；有人会在咖啡中加入少许马沙拉甜酒或朗姆酒；有人喜欢在表面撒上黑巧克力碎，增加风味的层次。
          <br />
          <br />
          而最令人着迷的是，提拉米苏与意大利文化中&ldquo;甜蜜生活&rdquo;（La Dolce Vita）的理念不谋而合。它不需要复杂的工具，不需要昂贵的设备，只需要一点耐心和对美食的热爱。当你用勺子舀起一块完美的提拉米苏，那绵密与轻盈并存的口感，会让你瞬间明白——为什么意大利人总说，生活应该是甜的。
          <br />
          <br />
          如同意大利的一切美好事物，提拉米苏的精髓在于分享。在周日的家庭聚餐后，一大家人围坐在一起，等待主人从冰箱里端出那盘自制的提拉米苏——那一刻的期待与欢愉，才是这道甜品最本真的意义。
        </p>
      </section>

      {/* Related Articles - centered */}
      <section style={{ padding: "80px 80px 0" }}>
        <h2
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 40,
            lineHeight: "1.1em",
            color: "#000000",
            margin: "0 0 48px 0",
            textAlign: "center",
          }}
        >
          更多美食故事
        </h2>
        <div
          style={{
            display: "flex",
            gap: 32,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              img: "/images/related-1.png",
              title: "东京深夜食堂：一碗拉面的温度",
              author: "林小雨",
            },
            {
              img: "/images/related-2.png",
              title: "巴黎面包坊：可颂的黄金标准",
              author: "张伟明",
            },
            {
              img: "/images/related-3.png",
              title: "曼谷街头：冬阴功的酸辣哲学",
              author: "陈思涵",
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 280px",
                maxWidth: 404,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div
                style={{
                  width: "100%",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "404 / 434",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: 8,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    lineHeight: "1.5em",
                    color: "#000000",
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    lineHeight: "1.5em",
                    color: "#828282",
                  }}
                >
                  {card.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ paddingTop: 80 }}>
        <Footer />
      </div>
    </div>
  );
}
