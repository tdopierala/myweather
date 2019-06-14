<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="App\Repository\WeatherRepository")
 * @ORM\Table(name="weather")
 */
class Weather
{
	/**
	 * @ORM\Column(type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	public $id;

	/**
	 * @ORM\Column(type="integer")
	 */
	public $cityid;

	/**
	 * @ORM\Column(type="string", length=100)
	 */
	public $cityname;

	/**
	 * @ORM\Column(type="string", length=100)
	 */
	public $latitude;

	/**
	 * @ORM\Column(type="string", length=100)
	 */
	public $longitude;

	/**
	 * @ORM\Column(type="float")
	 */
	public $tempavg;

	/**
	 * @ORM\Column(type="float")
	 */
	public $tempmin;

	/**
	 * @ORM\Column(type="float")
	 */
	public $tempmax;

	/**
	 * @ORM\Column(type="integer")
	 */
	public $clouds;

	/**
	 * @ORM\Column(type="float")
	 */
	public $windspeed;

	/**
	 * @ORM\Column(type="integer")
	 */
	public $winddeg;

	/**
	 * @ORM\Column(type="string", length=100)
	 */
	public $description;

	/**
	 * @ORM\Column(type="integer")
	 */
	public $condid;

	/**
	 * @ORM\Column(type="integer")
	 */
	public $dt;

	/**
	 * @ORM\Column(type="datetime")
	 */
	public $created;


	public function getCityid()
	{
		return $this->cityid;
	}

	public function setCityid($attr)
	{
		$this->cityid = $attr;
	}

	public function getCityname()
	{
		return $this->cityname;
	}

	public function setCityname($attr)
	{
		$this->cityname = $attr;
	}

	public function getLatitude()
	{
		return $this->latitude;
	}

	public function setLatitude($attr)
	{
		$this->latitude = $attr;
	}

	public function getLongitude()
	{
		return $this->longitude;
	}

	public function setLongitude($attr)
	{
		$this->longitude = $attr;
	}

	public function getTempavg()
	{
		return $this->tempavg;
	}

	public function setTempavg($attr)
	{
		$this->tempavg = $attr;
	}

	public function getTempmin()
	{
		return $this->tempmin;
	}

	public function setTempmin($attr)
	{
		$this->tempmin = $attr;
	}

	public function getTempmax()
	{
		return $this->tempmax;
	}

	public function setTempmax($attr)
	{
		$this->tempmax = $attr;
	}

	public function getClouds()
	{
		return $this->clouds;
	}

	public function setClouds($attr)
	{
		$this->clouds = $attr;
	}

	public function getWindspeed()
	{
		return $this->windspeed;
	}

	public function setWindspeed($attr)
	{
		$this->windspeed = $attr;
	}

	public function getWinddeg()
	{
		return $this->winddeg;
	}

	public function setWinddeg($attr)
	{
		$this->winddeg = $attr;
	}

	public function getDescription()
	{
		return $this->description;
	}
	public function setDescription($description)
	{
		$this->description = $description;
	}

	public function getCondid()
	{
		return $this->condid;
	}

	public function setCondid($attr)
	{
		$this->condid = $attr;
	}

	public function getDt()
	{
		return $this->dt;
	}

	public function setDt($attr)
	{
		$this->dt = $attr;
	}
}
