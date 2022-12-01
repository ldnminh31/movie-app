-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 01, 2022 at 07:46 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movieappdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `user_id` int(10) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `role` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '0 is admin and 1 is user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`user_id`, `username`, `password`, `phone`, `role`) VALUES
(1, 'admin', 'admin', '0705059984', 0),
(2, 'ldnminh', '123', '', 1),
(3, 'lak', '123', '', 1),
(6, 'messi', 'messi', '', 1),
(7, 'ronaldo', 'ronaldo', '', 1),
(8, 'tonicr8s', '8nghiep', '', 1),
(9, 'jenny', 'jenny', '', 1),
(10, 'test', 'test', '', 1),
(11, 'test1', 'test1', '0700009999', 1),
(12, 'test2', 'test2', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(10) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`) VALUES
(2, 'Horror'),
(3, 'Action'),
(4, 'Science fiction'),
(5, 'Documentary'),
(6, 'Comedy'),
(7, 'Western'),
(8, 'Cartoon'),
(17, 'Romance'),
(18, 'Adventure'),
(19, 'Crime');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `movie_id` int(10) NOT NULL,
  `comment_time` datetime DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `user_id`, `movie_id`, `comment_time`, `content`) VALUES
(1, 2, 9, '2022-11-22 19:28:18', 'This isn\'t just a fictional crime series but one that\'s based on a real-life story!!!'),
(2, 1, 8, '2022-11-22 19:28:18', 'Stylish cinematography (lots of unique shots and visuals) and score '),
(3, 1, 1, '2022-11-30 11:24:39', 'Có ai Việt Nam ko'),
(5, 3, 6, '2022-11-30 11:25:23', 'Ok phim hay'),
(6, 7, 10, '2022-11-30 11:25:37', 'Khi nào có phần 2 dị mn'),
(8, 6, 5, '2022-11-30 11:26:13', 'Wow hấp dẫn đếi'),
(10, 7, 8, '2022-11-30 11:26:43', 'Nhân vật chính không đáng sợ bằng vợ mình'),
(11, 3, 3, '2022-11-30 11:27:10', 'Hảo háng'),
(12, 9, 10, '2022-11-30 11:27:20', 'Phim DC này đỉnk quá'),
(13, 2, 6, '2022-11-30 11:27:38', 'phim xào nấu lại mấy phần trước'),
(14, 8, 4, '2022-11-30 11:28:26', 'Cái kết buồn quá, cảm xúc quá nhiều sao khi xem \n10 đỉm '),
(15, 2, 2, '2022-11-30 18:45:34', 'Sợ quá, máu me quá ghê gớm'),
(16, 7, 3, '2022-11-30 20:40:59', 'Phim hay nháaaa\r\nsiuuuuuuu\r\nanh 5 quả bóng vàng nhá'),
(20, 1, 3, '2022-10-30 21:44:53', '@Aida_Aida The only issue I can think of is that if your code deals with geoloical-scale time at least 8000 years in the future, your code could break because the format will be YYYYY-MM-DD in the year 10000. To avoid this you could split on the T character instead. (See'),
(21, 1, 3, '2022-10-30 22:16:44', 'nonono'),
(22, 1, 3, '2022-10-30 21:46:24', 'huhuhu phim cam dong qua mn'),
(23, 1, 10, '2022-10-30 21:48:00', 'Nguoi doi dau????'),
(24, 1, 10, '2022-10-30 21:48:13', 'Phim gi ma sieu nhan chan ngat z :((('),
(25, 1, 10, '2022-10-30 21:49:16', 'Wow, phim nay hay nhu sieu nhan gao'),
(26, 1, 10, '2022-10-30 21:49:31', 'fb88.com'),
(29, 1, 1, '2022-10-30 22:19:57', 'ronaldo is goat'),
(30, 1, 1, '2022-10-30 22:20:04', 'Haya Haya'),
(31, 1, 14, '2022-10-30 22:21:30', 'Phim hai vai noi'),
(32, 1, 14, '2022-10-30 22:22:40', 'Hahahaha phim zui qua troi'),
(33, 1, 14, '2022-10-30 22:22:44', 'Rat y nghia'),
(34, 1, 14, '2022-10-30 22:22:49', 'I like this!!!'),
(35, 1, 14, '2022-10-30 22:22:54', 'So funny'),
(36, 1, 14, '2022-10-30 22:23:02', 'So cam dong'),
(37, 1, 5, '2022-10-30 22:23:32', 'Cho phan 3'),
(42, 1, 1, '2022-11-01 00:08:35', 'Phim hay nhỉ'),
(43, 1, 11, '2022-11-01 00:28:46', 'Phim hay qua'),
(44, 1, 11, '2022-11-01 00:28:50', 'Qua troi hay un'),
(45, 10, 1, '2022-11-01 09:46:29', 'Phim hay');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `movie_id` int(10) NOT NULL,
  `movie_name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 DEFAULT NULL,
  `category_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`movie_id`, `movie_name`, `image`, `description`, `category_id`) VALUES
(1, 'The god father', NULL, 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.\nRelease date: March 24, 1972 (USA)\nDirector: Francis Ford Coppola\nCinematography: Gordon Willis\nSequel: The Godfather\nAdapted from: The Godfather\nProducers: Albert S. Ruddy, Park Circus Films France', 19),
(2, 'The Invitation', 'avatar.jpeg', 'After the death of her mother and having no other known relatives, Evie takes a DNA test and discovers a long-lost cousin she never knew she had.', 2),
(3, 'Blood Red Sky', 'avatar.jpeg', 'When a group of terrorists hijacks an overnight transatlantic flight, a mysteriously ill woman must unleash a monstrous secret to protect her young son.', 2),
(4, 'Texas Chainsaw Massacre', 'avatar.jpeg', 'Influencers looking to breathe new life into a Texas ghost town encounter Leatherface, the legendary killer who wears a mask of human skin.', 2),
(5, 'Avatar: The Way of Water', '@/components/avatar.jpeg', 'Jake Sully and Ney\'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora.', 4),
(6, 'Harry Potter', 'avatar.jpeg', 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.', 4),
(7, 'The silence of the lambs', 'avatar.jpeg', 'Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.', 2),
(8, 'Nope', 'avatar.jpeg', 'Two siblings running a horse ranch in California discover something wonderful and sinister in the skies above, while the owner of an adjacent theme park tries to profit from the mysterious, otherworldly phenomenon.', 2),
(9, 'Jeffrey Dahmer', 'avatar.jpeg', 'Filmmaker Chris James Thompson uses archival footage and fictionalised scenarios to tell the story of serial killer Jeffrey Dahmer as seen by a detective, the lead pathologist and Dahmer\'s neighbour.', 2),
(10, 'Iron Man', NULL, 'When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.', 3),
(11, 'Pokémon: The First Movie - Mewtwo Strikes Back', NULL, 'Scientists genetically create a new Pokémon, Mewtwo, but the results are horrific and disastrous.', 4),
(13, 'Top Gun: Maverick', NULL, 'After more than 30 years of service as one of the Navy\'s top aviators, Pete \"Maverick\" Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him', 3),
(14, '3 Idiots', NULL, 'In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`user_id`) USING BTREE;

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `fk_user_id` (`user_id`),
  ADD KEY `fk_movie_id` (`movie_id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`movie_id`) USING BTREE,
  ADD KEY `cat_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `movie_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `fk_movie_id` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`),
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts` (`user_id`);

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `FK_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
