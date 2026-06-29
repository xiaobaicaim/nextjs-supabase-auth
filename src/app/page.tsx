import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Navigation />

      {/* Hero Section */}
      <section style={{ padding: "clamp(24px, 5vw, 48px) clamp(20px, 5.5vw, 80px) 0", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40, maxWidth: 844 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h1
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 6vw, 64px)",
                letterSpacing: "-0.02em",
                color: "#000000",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              味蕾漫游
            </h1>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(18px, 2.5vw, 24px)",
                lineHeight: "1.5em",
                color: "rgba(0, 0, 0, 0.75)",
                margin: 0,
              }}
            >
              探索世界各地的极致美味，从街头小吃到米其林餐桌，每一道菜都是一段旅程。用舌尖感受食材的温度，用味蕾记录生活的美好。
            </p>
          </div>
          <a
            href="/article"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              lineHeight: "1.5em",
              color: "#FFFFFF",
              backgroundColor: "#000000",
              borderRadius: 8,
              padding: "clamp(14px, 2vw, 20px) clamp(24px, 3vw, 32px)",
              width: "fit-content",
              textDecoration: "none",
              display: "inline-block",
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            开始探索
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <section style={{ padding: "clamp(24px, 5vw, 48px) clamp(20px, 5.5vw, 80px) 0", maxWidth: 1280, margin: "0 auto" }}>
        <img
          src="/images/hero-image.png"
          alt="丰盛的国际美食盛宴"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: 8,
          }}
        />
      </section>

      {/* Section 1: Three Cards */}
      <section style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 5.5vw, 80px) 0", maxWidth: 1280, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(28px, 5vw, 48px)",
            letterSpacing: "-0.02em",
            color: "#000000",
            margin: "0 0 clamp(24px, 4vw, 48px) 0",
            lineHeight: 1.1,
          }}
        >
          本月精选
        </h2>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {[
            { img: "/images/card-food-1.png", title: "意式提拉米苏", body: "马斯卡彭奶酪与浓缩咖啡的完美邂逅，层层叠叠的绵密口感，每一口都是意大利的浪漫。可可粉的微苦与奶油的甜美在舌尖交织。" },
            { img: "/images/card-food-2.png", title: "法式焦糖布蕾", body: "金黄焦脆的焦糖外壳下，藏着如丝般顺滑的蛋奶内馅。轻轻敲开那层薄脆，感受法式甜点极致的细腻与优雅。" },
            { img: "/images/card-food-3.png", title: "日式抹茶芭菲", body: "宇治抹茶的清香层层铺陈，搭配红豆、白玉与寒天，和风甜点的精致在一杯中尽显。清爽回甘，余韵悠长。" },
          ].map((card, i) => (
            <div key={i} style={{ flex: "1 1 280px", minWidth: 250, display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ width: "100%", borderRadius: 8, overflow: "hidden" }}>
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "clamp(20px, 2.5vw, 24px)", lineHeight: "1.5em", color: "#000000", margin: 0 }}>{card.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: "1.5em", color: "#828282", margin: 0 }}>{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Text + Image */}
      <section style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 5.5vw, 80px) 0", maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "flex-start", gap: "clamp(24px, 6vw, 80px)", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 48, flex: "1 1 400px", minWidth: 280, maxWidth: 516, paddingTop: 48 }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.02em", color: "#000000", margin: 0, lineHeight: 1.1 }}>烹饪哲学</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              { title: "食材为先", body: "好的料理始于对食材的尊重。我们坚持选用当季最新鲜的原料，从源头把控品质，让每一种食材都能在盘中绽放它最本真的味道。" },
              { title: "匠心之道", body: "烹饪不只是一种技艺，更是一种修行。每一刀的力度、每一分火候的拿捏，都是多年经验的沉淀。在传统中创新，在细节处见真章。" },
              { title: "味觉叙事", body: "一道菜就是一个故事。从开胃到收尾，酸甜苦辣咸的节奏编排，如同乐章般起承转合。我们希望每位食客都能品尝到这份用心。" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "clamp(20px, 2.5vw, 24px)", lineHeight: "1.5em", color: "#000000", margin: 0 }}>{item.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: "1.5em", color: "#828282", margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap" }}>
            <a href="/article" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: "1.5em", color: "#FFFFFF", backgroundColor: "#000000", borderRadius: 8, padding: "clamp(10px, 1.5vw, 12px) clamp(18px, 2.5vw, 24px)", textDecoration: "none", display: "inline-block", boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>阅读更多</a>
            <a href="/about" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: "1.5em", color: "#000000", backgroundColor: "#E6E6E6", borderRadius: 8, padding: "clamp(10px, 1.5vw, 12px) clamp(18px, 2.5vw, 24px)", textDecoration: "none", display: "inline-block", boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>关于我</a>
          </div>
        </div>
        <div style={{ flex: "1 1 300px", minWidth: 250, maxWidth: 704, borderRadius: 8, overflow: "hidden" }}>
          <img src="/images/feature-image.png" alt="精心烹饪的美食特写" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </section>

      {/* Section 3: Two Dishes */}
      <section style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 5.5vw, 80px) 0", maxWidth: 1280, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.02em", color: "#000000", margin: "0 0 clamp(24px, 4vw, 48px) 0", lineHeight: 1.1 }}>招牌之选</h2>
        <div style={{ display: "flex", gap: 31, flexWrap: "wrap" }}>
          {[
            { img: "/images/dish-1.png", title: "香煎和牛佐红酒汁", body: "精选A5级和牛，煎至外焦里嫩，搭配陈年红酒熬制的浓郁酱汁。配以时令蔬菜与松露薯泥，每一口都是极致享受。" },
            { img: "/images/dish-2.png", title: "慢炖羊膝配香料", body: "低温慢炖六小时的羊膝，肉质酥烂入味。融合地中海香料与新鲜香草，搭配烤蔬菜与奶油玉米糊，温暖而满足。" },
          ].map((card, i) => (
            <div key={i} style={{ flex: "1 1 350px", minWidth: 280, display: "flex", flexDirection: "column", gap: 32 }}>
              <div style={{ width: "100%", borderRadius: 8, overflow: "hidden" }}>
                <img src={card.img} alt={card.title} style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "clamp(20px, 2.5vw, 24px)", lineHeight: "1.5em", color: "#000000", margin: 0 }}>{card.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: "1.5em", color: "#828282", margin: 0 }}>{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 5.5vw, 80px) 0", maxWidth: 1280, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.02em", color: "#000000", margin: "0 0 clamp(24px, 4vw, 48px) 0", lineHeight: 1.1 }}>食客口碑</h2>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {[
            { quote: "这里的美食让我重新认识了味觉的边界。每一道菜都像一个精心编排的故事，从第一口到最后一口，全是惊喜。", name: "林小雨", desc: "美食专栏作家", avatar: "/images/avatar-1.png" },
            { quote: "作为一个常年在外的旅人，这里的料理让我找到了家的味道。主厨对食材的理解和尊重，令人敬佩。", name: "张伟明", desc: "旅行美食博主", avatar: "/images/avatar-2.png" },
            { quote: "从摆盘到口味，每一个细节都透露着匠心。这不仅仅是一顿饭，更是一场关于美学的沉浸式体验。", name: "陈思涵", desc: "生活方式编辑", avatar: "/images/avatar-3.png" },
          ].map((item, i) => (
            <div key={i} style={{ flex: "1 1 280px", minWidth: 250, backgroundColor: "#FFFFFF", border: "1px solid #E6E6E6", borderRadius: 12, padding: 32, display: "flex", flexDirection: "column", gap: 48 }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: "1.5em", color: "#000000", margin: 0 }}>「{item.quote}」</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 45, height: 45, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                  <img src={item.avatar} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 16, lineHeight: "1.5em", color: "#000000" }}>{item.name}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 16, lineHeight: "1.5em", color: "#828282" }}>{item.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ marginTop: "clamp(40px, 8vw, 80px)", backgroundColor: "#F7F7F7", padding: "clamp(40px, 8vw, 89px) clamp(20px, 5.5vw, 80px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.02em", color: "#000000", margin: 0, lineHeight: 1.1 }}>开启你的美食之旅</h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <a href="/article" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: "1.5em", color: "#FFFFFF", backgroundColor: "#000000", borderRadius: 8, padding: "clamp(14px, 2vw, 20px) clamp(24px, 3vw, 32px)", textDecoration: "none", display: "inline-block", boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>探索文章</a>
          <a href="/about" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: "1.5em", color: "rgba(0, 0, 0, 0.9)", backgroundColor: "#E6E6E6", borderRadius: 8, padding: "clamp(14px, 2vw, 20px) clamp(24px, 3vw, 32px)", textDecoration: "none", display: "inline-block", boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>联系我</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
