import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Navigation />

      {/* About Section - centered */}
      <section
        style={{
          padding: "80px 80px 0",
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          gap: 80,
          alignItems: "flex-start",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div style={{ flex: "1 1 400px", maxWidth: 624, minWidth: 300 }}>
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 64,
              letterSpacing: "-0.02em",
              color: "#000000",
              margin: "0 0 24px 0",
              lineHeight: 1.1,
            }}
          >
            关于我
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 24,
              lineHeight: "1.5em",
              color: "#828282",
              margin: "0 0 24px 0",
            }}
          >
            一个用味蕾探索世界的美食爱好者
          </p>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "1.5em",
              color: "#000000",
            }}
          >
            <p style={{ margin: "0 0 20px 0" }}>
              你好，我是味蕾漫游的创始人。十年前，我在佛罗伦萨的一家小咖啡馆里吃到了人生中第一份正宗的提拉米苏——那一刻，我忽然明白，美食不仅仅是果腹，更是一种理解世界的方式。
            </p>
            <p style={{ margin: "0 0 20px 0" }}>
              从那时起，我开始了自己的美食探索之旅。从东京筑地市场的金枪鱼拍卖，到巴黎蒙马特的 artisan
              面包坊；从曼谷水上市场的冬阴功，到墨西哥城街头的塔可摊——我走过了四十多个国家，品尝了上千道料理，记录下数百个关于食物的故事。
            </p>
            <p style={{ margin: "0 0 20px 0" }}>
              这个博客是我与大家分享这些故事的窗口。我相信，每一道菜背后都藏着一段文化、一种生活态度。希望这些文字和图片，能让你也感受到味蕾旅行带来的快乐与启发。
            </p>
          </div>
        </div>
        <div
          style={{
            flex: "0 1 400px",
            maxWidth: 508,
            minWidth: 280,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <img
            src="/images/avatar-1.png"
            alt="美食博主 - 味蕾漫游创始人"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: 8,
            }}
          />
        </div>
      </section>

      {/* Contact Form - centered */}
      <section style={{ padding: "80px 80px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 624,
            margin: "0 auto 48px auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              lineHeight: "1.5em",
              color: "#000000",
              margin: 0,
            }}
          >
            与我联系
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              lineHeight: "1.5em",
              color: "#828282",
              margin: 0,
            }}
          >
            有任何美食推荐、合作邀请或只是想聊聊好吃的，欢迎给我留言。
          </p>
        </div>

        <form
          style={{
            maxWidth: 626,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px 32px",
            justifyContent: "center",
          }}
        >
          {/* First name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              flex: "1 1 250px",
              maxWidth: 295,
              minWidth: 200,
            }}
          >
            <label
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "1.5em",
                color: "#000000",
              }}
            >
              名字
            </label>
            <input
              type="text"
              placeholder="请输入你的名字"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "1.5em",
                color: "#828282",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E0E0E0",
                borderRadius: 8,
                padding: "12px 16px",
                outline: "none",
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Last name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              flex: "1 1 250px",
              maxWidth: 297,
              minWidth: 200,
            }}
          >
            <label
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "1.5em",
                color: "#000000",
              }}
            >
              姓氏
            </label>
            <input
              type="text"
              placeholder="请输入你的姓氏"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "1.5em",
                color: "#828282",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E0E0E0",
                borderRadius: 8,
                padding: "12px 16px",
                outline: "none",
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Email */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              width: "100%",
            }}
          >
            <label
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "1.5em",
                color: "#000000",
              }}
            >
              邮箱地址
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "1.5em",
                color: "#828282",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E0E0E0",
                borderRadius: 8,
                padding: "12px 16px",
                outline: "none",
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Message */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              width: "100%",
            }}
          >
            <label
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "1.5em",
                color: "#000000",
              }}
            >
              你的留言
            </label>
            <textarea
              placeholder="写下你想说的话，比如推荐一道你心中的神级美食..."
              rows={5}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "1.5em",
                color: "#828282",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E0E0E0",
                borderRadius: 8,
                padding: "12px 16px",
                outline: "none",
                resize: "vertical",
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "1.5em",
              color: "#FFFFFF",
              backgroundColor: "#000000",
              border: "none",
              borderRadius: 8,
              padding: "16px 32px",
              width: "100%",
              cursor: "pointer",
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            发送留言
          </button>
        </form>
      </section>

      <div style={{ paddingTop: 80 }}>
        <Footer />
      </div>
    </div>
  );
}
