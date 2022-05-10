import React from 'react';

const Blog = () => {
    return (
        <div className='col-lg-12 col-md-12 mt-5'>
            <h2 style={{ fontSize: "20px" }} className='w-50 mx-auto d-block text-muted text-center'>
                <span className='text-danger text-small'>Difference between authorization and authentication: </span><br />
                সহজভাবে বলতে গেলে, authorization হল কেউ কে তা যাচাই করার প্রক্রিয়া, যেখানে অনুমোদন হল ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, ফাইল এবং ডেটাতে অ্যাক্সেস রয়েছে তা যাচাই করার প্রক্রিয়া। পরিস্থিতি এমন একটি এয়ারলাইনের মতো যা নির্ধারণ করতে হবে কোন লোক বোর্ডে আসতে পারবে।</h2>

            <br />
            <br />

            <h2 style={{ fontSize: "20px" }} className='w-50 mx-auto d-block text-muted text-center'>
                <span className='text-danger '>Why are you using firebase? What other options do you have to implement authentication: </span><br />
                Firebase authorization ব্যাকএন্ড পরিষেবা, সহজে ব্যবহারযোগ্য SDK, এবং আপনার অ্যাপে ব্যবহারকারীদের প্রমাণীকরণের জন্য তৈরি UI লাইব্রেরি প্রদান করে। এটি পাসওয়ার্ড, ফোন নম্বর, Google, Facebook এবং Twitter এর মতো জনপ্রিয় ফেডারেটেড পরিচয় প্রদানকারী এবং আরও অনেক কিছু ব্যবহার করে authorization সমর্থন করে।

                এছাড়াও রয়েছে
                গিটহাব এন্টারপ্রাইজ সার্ভারে authorization করে আপনার অ্যাকাউন্টের সংস্থানগুলি নিরাপদে অ্যাক্সেস করতে পারেন</h2>
            <br />
            <br />
            <h2 style={{ fontSize: "20px" }} className='w-50 mx-auto d-block text-muted text-center'>
                <span className='text-danger '>What other services does firebase provide other than authentication:

                </span><br />
                Firebase Auth বিকল্প
                ফায়ারবেস বিকল্প - শীর্ষ 10+ প্রতিযোগী
                পার্স - ওপেন সোর্স ব্যাকএন্ড প্ল্যাটফর্ম;
                Back4app - হোস্টিং প্ল্যাটফর্ম পার্স করুন;
                কিনভে - এন্টারপ্রাইজের জন্য একটি পরিষেবা (mBaaS) হিসাবে মোবাইল ব্যাকএন্ড;
                ব্যাকেন্ডলেস - মোবাইল ব্যাকএন্ড এবং API পরিষেবা প্ল্যাটফর্ম;
                কুজল – ওয়েব, হাইব্রিড বা নেটিভ মোবাইল অ্যাপস এবং আইওটি প্রকল্পগুলির জন্য ব্যাকএন্ড;
                Pubnub - রিয়েল-টাইম API এবং গ্লোবাল মেসেজিং;
                কুমুলোস - অ্যাপ পারফরম্যান্স ম্যানেজমেন্ট;
                গেম স্পার্কস - গেম ব্যাকএন্ড প্ল্যাটফর্ম;
                হুডি - অফলাইন ফার্স্ট অ্যাপ্লিকেশনের জন্য একটি ক্লায়েন্ট API সহ জেনেরিক ব্যাকএন্ড;
                Appwrite – Flutter ডেভেলপারদের জন্য ওপেন-সোর্স ব্যাকএন্ড</h2>
        </div>
    );
};

export default Blog;