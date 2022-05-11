import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className='row  d-flex justify-content-center'>
            <div className='col-md-4 col-lg-12 mt-5'>
            <h2 style={{ fontSize: "20px" }} className=' text-muted'>
                <span className='text-danger text-small'>No.1/Difference between javascript and nodejs: </span><br />JavaScript হল একটি সাধারণ প্রোগ্রামিং ভাষা যা যেকোনো ব্রাউজারে JavaScript ইঞ্জিন চালায়। যেখানে নোড জেএস হল একটি জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষার জন্য একটি দোভাষী বা চলমান পরিবেশ যা অনেক বাড়াবাড়ি ধারণ করে, এটির জন্য লাইব্রেরি প্রয়োজন যা ভাল ব্যবহারের জন্য জাভাস্ক্রিপ্ট প্রোগ্রামিং থেকে সহজেই অ্যাক্সেস করা যেতে পারে।</h2>

            <br />
            <br />

            <h2 style={{ fontSize: "20px" }} className='text-muted '>
                <span className='text-danger '>No.2/When should you use nodejs and when should you use mongodb: </span><br />MongoDB এবং NodeJS দুটি ভিন্ন প্রযুক্তি। MonogDB একটি ডাটাবেস সিস্টেম যা আপনাকে দক্ষতার সাথে একটি ডাটাবেসে নথি সংরক্ষণ করার এবং ডেটা আপডেটের মতো ক্রিয়াকলাপ সম্পাদন করার, বা কিছু মানদণ্ড অনুসারে নথি অনুসন্ধান করার সুযোগ দেয়।</h2>
            <br />
            <br />
            <h2 style={{ fontSize: "20px" }} className=' text-muted '>
                <span className='text-danger '>No.3/What is the purpose of jwt and how does it work:
                 </span><br />JSON ওয়েব টোকেন (JWT) হল একটি ওপেন স্ট্যান্ডার্ড (RFC 7519) যা JSON অবজেক্ট হিসাবে পক্ষগুলির মধ্যে নিরাপদে তথ্য প্রেরণের জন্য একটি কম্প্যাক্ট এবং স্বয়ংসম্পূর্ণ উপায় সংজ্ঞায়িত করে। এই তথ্য যাচাই এবং বিশ্বাস করা যেতে পারে কারণ এটি ডিজিটাল স্বাক্ষরিত।</h2>
        </div>
            </div>
        </div>
    );
};

export default Blog;