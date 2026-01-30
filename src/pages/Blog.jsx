import React from 'react';
import { Calendar, User } from 'lucide-react';

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      author: "Musharof Chy",
      date: "25 Dec, 2025",
      title: "Free advertising for your online business",
      excerpt: "Discover effective strategies to promote your business without spending a fortune."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      author: "Musharof Chy",
      date: "25 Dec, 2025",
      title: "9 simple ways to improve your design skills",
      excerpt: "Learn essential tips and techniques to enhance your creative design abilities."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&q=80",
      author: "Musharof Chy",
      date: "25 Dec, 2025",
      title: "Tips to quickly improve your coding speed.",
      excerpt: "Master these proven methods to write code faster and more efficiently."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000080] to-[#0000FF]">Blogs & News</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content
            <br />
            of a page when looking at its layout. The point of using.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Blur Overlay - slides up from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out backdrop-blur-[4px]">
                  {/* Read More Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 hover:from-blue-600 hover:to-indigo-700">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Read More Link (visible by default on mobile) */}
                <div className="mt-4 lg:hidden">
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>

              {/* Bottom Border Animation */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="bg-[#000080] text-white px-10 py-4  font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-[#0000FF]">
            View All Blogs
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        }
      `}</style>
    </section>
  );
}