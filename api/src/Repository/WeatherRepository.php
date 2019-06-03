<?php
namespace App\Repository;

use Doctrine\ORM\EntityRepository;

class WeatherRepository extends EntityRepository
{
	public function countAll(): array
	{
		return $this->getEntityManager()
			->createQuery('SELECT count(w.id) AS _count FROM App:Weather w')
			->getResult();
	}

	public function findTopLocations(): array
	{
		return $this->getEntityManager()
			->createQuery('SELECT count(w.cityid) AS _count, w.cityname AS _cityname FROM App:Weather w GROUP BY w.cityid ORDER BY _count DESC')
			->setMaxResults(5)
			->getResult();
	}

	public function findRecentSearches(): array
	{
		return $this->getEntityManager()
			->createQuery('SELECT w.cityname, w.latitude, w.longitude, w.tempavg, w.clouds, w.windspeed, w.winddeg, w.description, w.dt, w.created
							FROM App:Weather w ORDER BY w.id DESC')
			->setMaxResults(15)
			->getResult();
	}

	public function findAllTemperatures(): array
	{
		return $this->getEntityManager()
			->createQuery('SELECT min(w.tempavg) as _min, max(w.tempavg) as _max, avg(w.tempavg) as _avg FROM App:Weather w')
			->getResult();
	}
}