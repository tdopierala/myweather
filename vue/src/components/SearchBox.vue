<template>
	<div class="search-box-wrapper">
		<!------------- SearchBox ---------------->
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6">
					<form>
						<input type="text" name="search" placeholder="Search location">
						<a href="#">
							<!-- <i class="fa fa-search"></i> <i class="fas fa-search"></i> -->
							<font-awesome-icon icon="search" />
						</a>
					</form>
				</div>
				<div class="col-12 col-md-6">
					<a href="#" class="btn-location-add">+</a>
					<div class="location-box">
						<p>Add location</p>
						<p>Did you know you can add favourite locations?</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SearchBox',
};
</script>
