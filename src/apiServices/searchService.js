import * as request from "@/utils/request";

/* Sample response:
data: [{
  id	:	2
  first_name	:	Đào Lê
  last_name	:	Phương Hoa
  full_name	:	Đào Lê Phương Hoa
  nickname	:	hoaahanassii
  avatar	:	https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg
  bio	:	✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !
  tick	:	true
  followings_count	:	1
  followers_count	:	76
  likes_count	:	1000
  website_url	:	https://fullstack.edu.vn/
  facebook_url	:	""
  youtube_url	:	""
  twitter_url	:	""
  instagram_url	: """
  created_at	:	2022-05-05 23:10:05
  updated_at	:	2022-05-05 23:11:39
  }]
*/
export const search = async (q, type = "less") => {
  try {
    const res = await request.get("users/search", {
      params: {
        q, // axios handle encodeURIComponent for you
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
